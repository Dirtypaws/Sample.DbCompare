using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Sample.DbCompare.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetDifferences(string field1, string field2)
        {
            return Json(new
                {
                    field1 = "Test",
                    field2 = "Test2",
                    field3 = "Test3",
                    diffs = new [] {
                        new { diff = "testDiff1" },
                        new { diff = "testDiff2" },
                        new { diff = "testDiff3" },
                        new { diff = "testDiff4" },
                    }
                }, JsonRequestBehavior.AllowGet);
        }
    }
}
