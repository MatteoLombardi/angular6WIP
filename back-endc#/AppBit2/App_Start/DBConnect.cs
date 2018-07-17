using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace AppBit2.App_Start
{
    class DBConnect
    {
        public string getConfigurationString(String connectionName)
        {
            String risultato = "";
            if (System.Configuration.ConfigurationManager.ConnectionStrings.Count > 0)
            {
                risultato = System.Configuration.ConfigurationManager.ConnectionStrings[connectionName].ConnectionString;
            }

            return risultato;
        }

        public SqlConnection connectionDataBase()
        {
            SqlConnection connection = new SqlConnection();
            connection.ConnectionString = this.getConfigurationString("DBConnection");
            connection.Open();

            return connection;
        }

        public SqlCommand runCommandParams(string procedure, CommandType type, SqlParameter[] parameters)
        {
            using (SqlCommand cmd = new SqlCommand())
            {
                cmd.Connection = connectionDataBase();
                cmd.CommandType = type;
                cmd.CommandText = procedure;
                cmd.CommandTimeout = 120;
                cmd.Parameters.AddRange(parameters);

                return cmd;
            }
        }

        public SqlCommand runCommandNoParams(string procedure, CommandType type, SqlParameter[] parameters)
        {
            using (SqlCommand cmd = new SqlCommand())
            {
                cmd.Connection = connectionDataBase();
                cmd.CommandType = type;
                cmd.CommandText = procedure;
                cmd.CommandTimeout = 120;

                return cmd;
            }
        }

        public SqlParameter CreateParameter(string parameterName, SqlDbType type, object value)
        {
            SqlParameter parameter = new SqlParameter(parameterName, type);
            parameter.Value = value;

            return parameter;
        }

        public List<Hashtable> dataResult(SqlDataReader data)
        {
            List<Hashtable> dataTable = new List<Hashtable>();
            while (data.Read())
            {
                Hashtable hashTable = new Hashtable();
                for (int i = 0; i < data.FieldCount; i++)
                {
                    hashTable.Add(data.GetName(i), data[i].ToString());
                }
                dataTable.Add(hashTable);
            }

            return dataTable;
        }

        public void closeConnection()
        {
            if (connectionDataBase().State != ConnectionState.Closed)
            {
                connectionDataBase().Close();
            }
            connectionDataBase().Dispose();
        }
    }
}