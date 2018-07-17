using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace AppBit2
{
    [DataContract]
    public class Cliente
    {

        [DataMember(Name = "id")]
        public Guid Id { get; set; }
        [DataMember(Name = "nomeCliente")]
        public string NomeCliente { get; set; }
        [DataMember(Name = "score")]
        public int Score { get; set; }

        public Cliente(string nomeCliente, int score)
        {
            this.Id = Guid.NewGuid();
            this.NomeCliente = nomeCliente;
            this.Score = score;
        }
    }
}