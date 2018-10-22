import ActiveWidget from './active-widget';
import Widget from './widget';

export default class Document {
    widgets: Array<ActiveWidget> = [];

    public addWidget(widget: Widget, parameters: Map<string, string>) {
        this.widgets.push(new ActiveWidget(widget, parameters))
    }
}