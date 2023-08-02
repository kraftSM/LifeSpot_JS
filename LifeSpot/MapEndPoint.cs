﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using System.IO;
using System.Text;


namespace LifeSpot
{
    public static class MapEndPoint
    {   //пока настраиваю через константы
        //расположение scr in File System - Должно сооветствовать расположению статических подключаемых файлов в проекте
        const string Path_CSS = "Static/CSS";
        const string Path_JS = "Static/JS";
        const string Path_HTML = "Views";
        const string Path_ElementsHTML = "Views/Shared";
        //расположение dst in Site Virtual File System - Должно сооветывовать путь подключаемых файлов HTML на страницах

        const string MapPath_HTML= "/"; 
        const string MapPath_CSS = "/Static/CSS/";
        const string MapPath_JS = "/Static/JS/";

        public static void MapHtml(this IEndpointRouteBuilder builder)
        {
            // Загружаем отдельные элементы для вставки в шаблон: боковое меню и футер
            string footerHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), Path_ElementsHTML, "footer.html"));
            string sideBarHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), Path_ElementsHTML, "sidebar.html"));

            var srcFiles = new[] { "index.html", "about.html", "testing.html", "test.html" }; //массив с именами HTML-файлов, инициализируем  по месту
            string MapPath;

            foreach (var fileName in srcFiles)
            {
                //build MapPath, then mapping
                if (fileName == "index.html")
                    MapPath = MapPath_HTML; 
                else MapPath = MapPath_HTML + fileName.Substring(0, fileName.Length - 5); // 5=".html"                    
                ;
                builder.MapGet(MapPath, async context =>
                {
                    var srcPath = Path.Combine(Directory.GetCurrentDirectory(), Path_HTML, fileName);
                    //Загружаем шаблон страницы, вставляя в него элементы
                        var html = new StringBuilder(await File.ReadAllTextAsync(srcPath))
                            .Replace("<!--SIDEBAR-->", sideBarHtml)
                            .Replace("<!--FOOTER-->", footerHtml);
                    // Добавим для загрузки слайдера                            
                    //.Replace("<!--SLIDER-->", sliderHtml);

                    await context.Response.WriteAsync(html.ToString());
                });
            }

            //builder.MapGet("/", async context =>
            //{
            //    var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "index.html");
            //    var viewText = await File.ReadAllTextAsync(viewPath);

            //    // Загружаем шаблон страницы, вставляя в него элементы
            //    var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
            //        .Replace("<!--SIDEBAR-->", sideBarHtml)
            //        .Replace("<!--FOOTER-->", footerHtml);

            //    await context.Response.WriteAsync(html.ToString());
            //});

            //builder.MapGet("/testing", async context =>
            //{
            //    var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "testing.html");

            //    // Загружаем шаблон страницы, вставляя в него элементы
            //    var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
            //        .Replace("<!--SIDEBAR-->", sideBarHtml)
            //        .Replace("<!--FOOTER-->", footerHtml);

            //    await context.Response.WriteAsync(html.ToString());
            //});

            //builder.MapGet("/about", async context =>
            //{
            //    var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "about.html");
            //    //string sliderHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "slider.html"));

            //    // Загружаем шаблон страницы, вставляя в него элементы
            //    var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
            //        .Replace("<!--SIDEBAR-->", sideBarHtml)
            //        .Replace("<!--FOOTER-->", footerHtml);
            //        // Добавим для загрузки слайдера
            //        //.Replace("<!--SLIDER-->", sliderHtml);

            //    await context.Response.WriteAsync(html.ToString());
            //});
        }

        // Загружаем отдельные элементы для вставки в шаблон: боковое меню и футер
        //string footerHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "footer.html"));
        //string sideBarHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "sideBar.html"));           
        //app.UseEndpoints(endpoints =>
        //{

        //    endpoints.MapGet("/", async context =>
        //    {
        //        var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "index.html");
        //        var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
        //            .Replace("<!--SIDEBAR-->", sideBarHtml)
        //            .Replace("<!--FOOTER-->", footerHtml);

        //        await context.Response.WriteAsync(html.ToString());
        //    });
        //    endpoints.MapGet("/about", async context =>
        //    {
        //        var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "about.html");
        //        var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
        //            .Replace("<!--SIDEBAR-->", sideBarHtml)
        //            .Replace("<!--FOOTER-->", footerHtml);

        //        await context.Response.WriteAsync(html.ToString());
        //    });
        //    endpoints.MapGet("/test", async context =>
        //    {
        //        var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "test.html");
        //        var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
        //            .Replace("<!--SIDEBAR-->", sideBarHtml)
        //            .Replace("<!--FOOTER-->", footerHtml);

        //        await context.Response.WriteAsync(html.ToString());
        //    });           
        //     endpoints.MapGet("/testing", async context =>
        //    {
        //        var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "testing.html");

        //        // Загружаем шаблон страницы, вставляя в него элементы
        //        var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
        //            .Replace("<!--SIDEBAR-->", sideBarHtml)
        //            .Replace("<!--FOOTER-->", footerHtml);

        //        await context.Response.WriteAsync(html.ToString());
        //    });
        public static void MapCss(this IEndpointRouteBuilder builder)
        {
            var srcFiles = new[] { "index.css" }; //массив с именами CSS-файлов, инициализируем  по месту
            string MapPath;
            foreach (var fileName in srcFiles)
            {
                MapPath = MapPath_CSS + fileName; //build MapPath, then mapping
                builder.MapGet(MapPath, async context =>
                {
                    var srcPath = Path.Combine(Directory.GetCurrentDirectory(), Path_CSS, fileName);
                    var resurcePath = await File.ReadAllTextAsync(srcPath);
                    await context.Response.WriteAsync(resurcePath);
                });
            }
        }
       public static void MapJs(this IEndpointRouteBuilder builder)
        {
            var srcFiles = new[] { "index.js", "about.js" };  //массив с именами JS-файлов, инициализируем по месту
            string MapPath;
            foreach (var fileName in srcFiles)
            {                
                MapPath = MapPath_JS + fileName; //build MapPath, then mapping
                builder.MapGet(MapPath, async context =>
                {
                    var srcPath = Path.Combine(Directory.GetCurrentDirectory(), Path_JS, fileName);
                    var resurcePath = await File.ReadAllTextAsync(srcPath);
                    await context.Response.WriteAsync(resurcePath);
                });
            }
        }
        //    endpoints.MapGet("/Static/CSS/index.css", async context =>
        //    {
        //        var cssPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "CSS", "index.css");
        //        var css = await File.ReadAllTextAsync(cssPath);
        //        await context.Response.WriteAsync(css);
        //    });
 
        //    endpoints.MapGet("/Static/JS/index.js", async context =>
        //    {
        //        // Для JS настроим всё так же, как уже сделали для CSS выше.
        //        var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "JS", "index.js");
        //        var js = await File.ReadAllTextAsync(jsPath);
        //        await context.Response.WriteAsync(js);
        //    });
        //    endpoints.MapGet("/Static/JS/about.js", async context =>
        //    {
        //        // Для JS настроим всё так же, как уже сделали для CSS выше.
        //        var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "JS", "about.js");
        //        var js = await File.ReadAllTextAsync(jsPath);
        //        await context.Response.WriteAsync(js);
        //    });
        //});
    }
}