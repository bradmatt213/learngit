var fsm = new StateMachine({
    init: 'solid',
    transitions: [
        {name: 'melt', from: 'solid', to: 'liquid'},
        {name: 'freeze', from: 'liquid', to: 'solid'},
        {name: 'vaporize', from: 'solid', to: 'gas'},
        {name: 'condense', from: 'gas', to: 'liquid'}
    ],
    methods: {
        onMelt: function () {
            console.log('I melted')
        },
        onFreeze: function () {
            console.log('I froze')
        },
        onVaporize: function () {
            console.log('I vaporized')
        },
        onCondense: function () {
            console.log('I condensed')
        }
    }
});


console.log(fsm.allStates());