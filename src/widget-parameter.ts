export default class WidgetParameter {
    name: string;
    type: string;
    description: string;
    defaultValue: string;
    constructor(name: string, type: string, description: string, defaultValue: string = "") {
        this.name = name;
        this.type = type;
        this.description = description;
        this.defaultValue = defaultValue;
    }
}