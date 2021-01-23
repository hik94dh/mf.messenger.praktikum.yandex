import { EventBus } from "./eventBus.js";

export default class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_RENDER: 'flow:render',
        FLOW_CDU: 'flow:component-did-update',
    };

    _element: any = HTMLElement;
    _meta: any = null;
    _children: any = null;

    props: object;
    eventBus: () => EventBus;

    constructor(template: string, props = {}) {
        const eventBus = new EventBus();

        this._meta = {template, props};
        this._element = this._createDocumentElement('div');
        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    init() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    setProps = (nextProps: {[key: string]: string}) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    _createDocumentElement(tagName: string): HTMLElement {
        return document.createElement(tagName);
    }

    compile(props: object): string {
        return Handlebars.compile(this._meta.template)(props)
    }

    _render() {
        this._element.innerHTML = this.render();
    }

    render() {
        return this.compile(this.props);
    }

    getContent(): HTMLElement {
        return this._element;
    }

    _makePropsProxy(props) {
        return new Proxy(props, {
            set(target, prop, value) {
                target[prop] = value;

                // this.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            }
        });
    }

    _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    componentDidMount() {
    };

    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);

        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    componentDidUpdate(oldProps, newProps) {
        return oldProps !== newProps;
    }
}