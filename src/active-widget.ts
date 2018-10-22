import Widget from "./widget";

export default class ActiveWidget {
    widget: Widget;
    parameters: Map<string, string>;

    constructor(widget: Widget, parameters: Map<string, string>) {
        this.widget = widget
        this.parameters = parameters
    }

    public renderCanvasWidget(index: number): HTMLElement {
        let el = document.createElement("div")
        el.className = "canvas-widget"
        el.dataset["widgetID"] = String(index)
        let out = this.widget.template
        this.parameters.forEach((param, paramName) => {
            let rawParam = this.widget.parameters.get(paramName)
            let value = param
            if (rawParam && (rawParam.type == "text")) {
                value = this.cleanText(value)
            }
            out = out.replace("::" + paramName + "::", value)
        });

        el.innerHTML = out

        return el
    }

    private cleanText(text: string): string {
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

    }
}