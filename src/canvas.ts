import Document from './document';
import Widget from './widget';
import WidgetGallery from './widget-gallery';

export default class Canvas {

    element: HTMLElement;

    selectedWidget: number;
    isSelected: boolean;

    dragged?: EventTarget;

    doc: Document;

    gallery: WidgetGallery;

    constructor(id: string, widgetGallery: WidgetGallery, doc?: Document) {
        this.element = document.getElementById(id);
        this.gallery = widgetGallery;
        this.initialiseEvents()
        if (!doc) {
            this.doc = new Document()
        }
    }


    private initialiseEvents() {

        document.addEventListener("dragstart", (e) => {
            this.dragged = e.target;
        })
        this.element.addEventListener("dragenter", (e) => {
            e.preventDefault();
            if (e.target instanceof HTMLElement) {
                //todo: in-canvas dropzones
                // e.target.style.backgroundColor = "yellowgreen"
                this.element.style.backgroundColor = "yellowgreen"
            }
        })
        this.element.addEventListener("dragover", (e) => {
            e.preventDefault();
            if (e.target instanceof HTMLElement) {
                //todo: in-canvas dropzones
                // e.target.style.backgroundColor = "yellowgreen"
                this.element.style.backgroundColor = "yellowgreen"
            }
        })
        this.element.ondragleave = (e) => {
            e.preventDefault();
            this.element.style.backgroundColor = "white"
        })
        this.element.addEventListener("drop", (e) => {
            e.preventDefault()
            this.element.style.backgroundColor = "white"
            if (this.dragged && this.dragged instanceof HTMLElement) {
                let widgetName = this.dragged.dataset["widgetName"]
                let widget = this.gallery.getWidget(widgetName)
                this.doc.addWidget(widget, widget.defaultParameters())
            }
            this.renderDocument()
        })
        this.element.addEventListener("click", (e) => {

            if (e.target instanceof HTMLElement && e.target.id != "canvas") {
                let parent = e.target.closest(".canvas-widget")
                if (parent instanceof HTMLElement) {
                    this.isSelected = true;
                    if (Number(parent.dataset["widgetID"]) == this.selectedWidget && this.isSelected) {
                        this.isSelected = false
                    }
                    this.selectedWidget = Number(parent.dataset["widgetID"]);
                } else {
                    this.isSelected = false;
                }
            } else {
                this.isSelected = false;
            }
            this.renderDocument()
        })
    }

    private renderDocument() {
        this.element.innerHTML = ""
        this.doc.widgets.forEach((activeWidget, i) => {

            let el = activeWidget.renderCanvasWidget(i)
            if (this.isSelected && i == this.selectedWidget) {
                el.classList.add("selected")
            }
            this.element.append(el)
        })
    }
}
