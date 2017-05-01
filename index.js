import app from './app';

app.listen(app.get('port'), () => {
    console.log(`repondendo na porta: ${app.get('port')}`);
});