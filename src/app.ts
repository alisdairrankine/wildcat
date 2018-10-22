import Canvas from './canvas';
import WidgetGallery from './widget-gallery';
import Widget from './widget';
import WidgetParameter from './widget-parameter';

class App {

    canvas: Canvas;
    widgetGallery: WidgetGallery;

    constructor(canvasID: string) {
        this.widgetGallery = new WidgetGallery("widget-selector")
        this.widgetGallery.addWidget(paragraphWidget)
        this.widgetGallery.addWidget(h1Widget)
        this.widgetGallery.addWidget(h2Widget)
        this.widgetGallery.addWidget(h3Widget)
        this.widgetGallery.addWidget(h4Widget)
        this.widgetGallery.addWidget(htmlWidget)
        this.widgetGallery.addWidget(imageWidget)
        console.log("loading widget gallery")

        this.canvas = new Canvas(canvasID, this.widgetGallery);
        console.log("loading canvas")
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window["app"] = new App("canvas");
});



var paragraphWidget = new Widget(
    "paragraph",
    "<p>::textContent::</p>",
    [
        new WidgetParameter("textContent", "text", "text in the paragraph", "this is a paragraph")
    ],
    "lightgreen",
)

var h1Widget = new Widget(
    "h1",
    "<h1>::textContent::</h1>",
    [
        new WidgetParameter("textContent", "text", "text in the header", "this is an H1 header")
    ],
    "#000",
)

var h2Widget = new Widget(
    "h2",
    "<h2>::textContent::</h2>",
    [
        new WidgetParameter("textContent", "text", "text in the header", "this is an H2 header")
    ],
    "#333",
)

var h3Widget = new Widget(
    "h3",
    "<h3>::textContent::</h3>",
    [
        new WidgetParameter("textContent", "text", "text in the header", "this is an H3 header")
    ],
    "#666",
)

var h4Widget = new Widget(
    "h4",
    "<h4>::textContent::</h4>",
    [
        new WidgetParameter("textContent", "text", "text in the header", "this is an H4 header")
    ],
    "#999",
)

var imageWidget = new Widget(
    "image",
    `<img style="width:100%;" src="::image::"/>`,
    [
        new WidgetParameter("image", "image", "image URL", "https://placekitten.com/1280/720")
    ],
    "lightblue",
)


var htmlWidget = new Widget(
    "html",
    `::html::`,
    [
        new WidgetParameter("html", "html", "html source", "<pre>raw html</pre>")
    ],
    "lightyellow",
)