import Widget from './widget';


export default class WidgetGallery {

    element: HTMLElement;
    widgets: Map<string, Widget>

    constructor(id: string) {
        this.element = document.getElementById(id);
        this.widgets = new Map<string, Widget>();
    }

    public addWidget(widget: Widget) {
        this.widgets.set(widget.name, widget)
        this.render()
    }

    public getWidget(name: string): Widget {
        return this.widgets.get(name)
    }

    public render() {
        this.element.innerHTML = ""
        this.widgets.forEach((widget) => {
            let el = this.renderWidget(widget)
            this.element.appendChild(el)
        })
    }

    private renderWidget(widget: Widget): HTMLElement {

        let el = document.createElement("div")
        el.draggable = true;
        el.className = "widget-selector-widget"
        el.dataset["widgetName"] = widget.name;

        let icon = document.createElement("div")
        icon.className = "widget-selector-widget-icon"
        icon.style.backgroundColor = widget.colour
        el.appendChild(icon)

        el.append(widget.name)
        return el
    }
}
