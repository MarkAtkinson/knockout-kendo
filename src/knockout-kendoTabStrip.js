createBinding({
    name: "kendoTabStrip",
    async: true
});

createBinding({
    name: "kendoTab",
    parent: "kendoTabStrip",
    watch: {
        selected: function(element, value) {
            this.select(value ? element : null);
        },
        enabled: ENABLE
    },
    childProp: "item",
    events: {
        selected: {
            writeTo: SELECTED,
            value: true
        }
    },
    async: true
});