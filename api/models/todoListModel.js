/**
 * Created by rodrigo.vasconcelos on 20/06/2017.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {
        type: String,
        Required: 'Informe o nome da tarefa.'
    },
    Created_date: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: [{
            type: String,
            enum: ['pendente', 'fazendo', 'concluído']
        }],
        default: ['pendente']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);