using AppBit2.App_Start;
using AppBit2.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AppBit2.Controllers
{
    public class ValuesController : ApiController
    {
        DBConnect conn = new DBConnect();
        List<Class1> lista = new List<Class1>();

        // GET api/values
        public List<Class1> Get()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("select * from cliente", conn.connectionDataBase());
                SqlDataReader reader = cmd.ExecuteReader();
                List<Class1> lista = new List<Class1>();
                while (reader.Read())
                {
                    Class1 cliente = new Class1
                    {
                        id = (int)reader["id"],
                        nome = (string)reader["nome"],
                        score = (int)reader["score"]
                    };
                    lista.Add(cliente);

                }
                return lista;

            }
            catch (Exception)
            {

                throw;
            }
            finally
            {
                conn.closeConnection();
            }
        }

        // GET api/values/5
        public Class1 Get(int id)
        {
            try
            {
                SqlCommand cmd = new SqlCommand("select * from cliente where id= " + id, conn.connectionDataBase());
                SqlDataReader reader = cmd.ExecuteReader();
                reader.Read();
                Class1 cliente = new Class1
                {
                    id = (int)reader["id"],
                    nome = (string)reader["nome"],
                    score = (int)reader["score"]
                };

                return cliente;

            }
            catch (Exception)
            {

                throw;
            }
            finally
            {
                conn.closeConnection();
            }
            
        }

        // POST api/values
        public Class1 Post([FromBody]Class1 value)
        {
            try
            {
                SqlCommand cmd = new SqlCommand("insert into cliente (nome, score) values (@nome, @score) SELECT SCOPE_IDENTITY()", conn.connectionDataBase());
                cmd.Parameters.Add("@nome", SqlDbType.Text);
                cmd.Parameters["@nome"].Value = value.nome;
                cmd.Parameters.Add("@score", SqlDbType.Int);
                cmd.Parameters["@score"].Value = value.score;
                int nuovoID = Convert.ToInt32(cmd.ExecuteScalar());
                return new Class1()
                {
                    id = nuovoID,
                    nome = value.nome,
                    score = value.score
                };
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                conn.closeConnection();
            }
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Class1 value)
        {
            try
            {
                SqlCommand cmd = new SqlCommand("update cliente set nome = @nome, score = @score where id=@id", conn.connectionDataBase());
                cmd.Parameters.Add("@id", SqlDbType.Int);
                cmd.Parameters["@id"].Value = value.id;
                cmd.Parameters.Add("@nome", SqlDbType.Text);
                cmd.Parameters["@nome"].Value = value.nome;
                cmd.Parameters.Add("@score", SqlDbType.Int);
                cmd.Parameters["@score"].Value = value.score;
                cmd.ExecuteNonQuery();
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                conn.closeConnection();
            }
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            try
            {
                SqlCommand cmd = new SqlCommand("delete cliente where id=@id", conn.connectionDataBase());
                cmd.Parameters.Add("@id", SqlDbType.Int);
                cmd.Parameters["@id"].Value = id;
                cmd.ExecuteNonQuery();
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                conn.closeConnection();
            }
        }
    }
}
