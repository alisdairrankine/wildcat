import WidgetParameter from "./widget-parameter";

export default class Widget {
    name: string;
    colour: string;
    template: string;
    parameters: Map<string, WidgetParameter>;

    constructor(name: string, template: string, parameters: Array<WidgetParameter>, colour: string = "cornflowerblue") {
        this.name = name;
        this.colour = colour;
        this.template = template;
        this.parameters = new Map<string, WidgetParameter>();

        parameters.map((param) => {
            this.parameters.set(param.name, param);
        })
    }

    public defaultParameters(): Map<string, string> {
        let params = new Map<string, string>();
        this.parameters.forEach((param) => {
            params.set(param.name, param.defaultValue)
        })
        return params
    }
}