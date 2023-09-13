import { useEffect } from "react";


const Clock = () => {
    useEffect(() => {
        const actualizarHora = function () {
            const fecha: Date = new Date();
            let horas: number = fecha.getHours();
            let ampm: string;
            const minutos: number = fecha.getMinutes();
            const segundos: number = fecha.getSeconds();
            const diaSemana: number = fecha.getDay();
            const dia: number = fecha.getDate();
            const mes: number = fecha.getMonth();
            const año: number = fecha.getFullYear();
    
            const pHoras: HTMLElement | null = document.getElementById('horas');
            const pAMPM: HTMLElement | null = document.getElementById('ampm');
            const pMinutos: HTMLElement | null = document.getElementById('minutos');
            const pSegundos: HTMLElement | null = document.getElementById('segundos');
            const pDiaSemana: HTMLElement | null = document.getElementById('diaSemana');
            const pDia: HTMLElement | null = document.getElementById('dia');
            const pMes: HTMLElement | null = document.getElementById('mes');
            const pAño: HTMLElement | null = document.getElementById('año');
    
            const semana: string[] = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    
            if (pDiaSemana) {
                pDiaSemana.textContent = semana[diaSemana];
            }
    
            if (pDia) {
                pDia.textContent = dia.toString();
            }
    
            const meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            if (pMes) {
                pMes.textContent = meses[mes];
            }
            if (pAño) {
                pAño.textContent = año.toString();
            }
    
            if (horas >= 12) {
                horas = horas - 12;
                ampm = 'PM';
    
            } else {
                ampm = 'AM';
            }
    
            if (horas == 0) {
                horas = 12;
            }
    
            if (pHoras) {
                pHoras.textContent = horas.toString();
            }
    
            if (pAMPM) {
                pAMPM.textContent = ampm;
            }
    
            if (pMinutos) {
                if (minutos < 10) {
                    let m = String(minutos);
                    m = "0" + minutos;
                    pMinutos.textContent = m;
                } else {
                    pMinutos.textContent = minutos.toString();
                }
            }
    
            if (pSegundos) {
                if (segundos < 10) {
                    let s = String(segundos);
                    s = "0" + segundos;
                    pSegundos.textContent = s;
                } else {
                    pSegundos.textContent = segundos.toString();
                }
            }
    
        };
    
        actualizarHora();
        setInterval(actualizarHora, 1000);
    }, []);

    return (
        <div className="mx-auto" id="wrap">
            <div className="mx-auto text-center" id="widget">
                <div className="text-center flex mx-auto px-20" id="fecha">
                    <p className="diaSemana text-black px-1" id=""></p>
                    <p className="text-black px-1" id="dia"></p>
                    <p className="text-black px-1">de</p>
                    <p className="text-black px-1" id="mes"></p>
                    <p className="text-black px-1">del</p>
                    <p className="text-black px-1 " id="año"></p>
                </div>

                <div className="pl-36 py-5 flex mb-10" id="reloj">
                    <p className="text-black text-4xl" id="horas"></p>
                    <p className="text-black text-4xl">:</p>
                    <p className="text-black text-4xl " id="minutos"></p>
                    <p className="text-black text-4xl">:</p>
                    <div className="flex " id="caja-segundos ">
                        <p className="text-black text-4xl py-0 my-0" id="segundos"></p>
                        <p className="text-black py-0 my-0 text-1xl " id="ampm"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clock;