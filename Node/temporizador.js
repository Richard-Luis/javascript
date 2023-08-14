const schedule = require('node-schedule');
const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 3', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds());
});

setTimeout(function(){
    tarefa1.cancel();
    console.log('Cancelando Tarefa 1!')
}, 20000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)];// vai executar de seg a sex

regra.hour =  20;
regra.second = 30;

const Tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando a Tarefa 2!', new Date().getSeconds())
})