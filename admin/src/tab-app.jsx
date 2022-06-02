import React from "react";
import { withStyles } from "@material-ui/core/styles";

import GenericApp from "@iobroker/adapter-react/GenericApp";
import TreeBuilder from "./components/TreeBuilder/TreeBuilder";
import Store from "./components/TreeBuilder/Core/Store";
import Setup from "./components/TreeBuilder/Core/Setup";
import EventDispatcher from "./components/TreeBuilder/Core/EventDispatcher"
import { TreeBuilderProvider } from "./components/TreeBuilder/Core/TreeBuilderContext";

/**
 * @type {(_theme: Theme) => import("@material-ui/styles").StyleRules}
 */
const styles = (_theme) => ({
    root: {},
});

class TabApp extends GenericApp {
    constructor(props) {
        const extendedProps = {
            ...props,
            bottomButtons: false,
            encryptedFields: [],
            translations: {
                "en": require("./i18n/en.json"),
                "de": require("./i18n/de.json"),
                "ru": require("./i18n/ru.json"),
                "pt": require("./i18n/pt.json"),
                "nl": require("./i18n/nl.json"),
                "fr": require("./i18n/fr.json"),
                "it": require("./i18n/it.json"),
                "es": require("./i18n/es.json"),
                "pl": require("./i18n/pl.json"),
                "zh-cn": require("./i18n/zh-cn.json"),
            },
        };
        super(props, extendedProps);
    }

    onConnectionReady() {
        // executed when connection is ready
    }

    render() {
        if (!this.state.loaded) {
            return super.render();
        }

        return (
            <div className="App">
                <Store>
                    <TreeBuilderProvider socketInstance={this.socket} tabAppClass={this}>
                        <EventDispatcher />
                        <TreeBuilder />
                        <Setup />
                    </TreeBuilderProvider>
                </Store>
                {this.renderError()}
                {this.renderToast()}
            </div>
        );
    }
}

export default withStyles(styles)(TabApp);