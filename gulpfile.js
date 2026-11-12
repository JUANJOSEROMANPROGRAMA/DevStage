import { src, dest ,watch} from 'gulp';


import gulpSass from 'gulp-sass'
import * as  dartSaas from 'sass'


const sass = gulpSass(dartSaas)



export function css(done) {

    src('src/scss/app.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(dest('build/css'))


    done()
}


/* para aplicar el watch añ gulpfile */
export function dev(){


/* el watch es una funcion predeterminada que se puede importar desde watch....solo seria llamar la funcion y pasarle como parametro cual es el archivo al que se desea que se le haga seguimiento */
    watch('src/scss/**/*.scss',css)
    
    


}