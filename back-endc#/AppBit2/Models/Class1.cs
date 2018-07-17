using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AppBit2.Models
{
    public class Class1
    {
        public int id { get; set; }
        public string nome { get; set; }
        public int score { get; set; }

        public Class1(int id, string nome, int score)
        {
            this.id = id;
            this.nome = nome;
            this.score = score;
        }

        public Class1()
        {
        }
    }
}