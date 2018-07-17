using AppBit2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AppBit2.Controllers
{
    public class TestController : Controller
    {
        // GET: Test
        public ActionResult Test()
        {
            return View();
        }

        public ActionResult getItem()
        {
            List<Class1> lista = new List<Class1>();
            lista.Add(new Class1(1,"nome1", 100));
            lista.Add(new Class1(2,"nome2", 110));
            lista.Add(new Class1(3,"nome3", 120));
            lista.Add(new Class1(4,"nome4", 130));
            lista.Add(new Class1(5,"nome5", 140));

            return Json(lista, JsonRequestBehavior.AllowGet);
        }
    }
}