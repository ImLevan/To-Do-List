

const Clock = () => {
    return (
        <div className="mx-auto" id="wrap">
            <div className="mx-auto text-center" id="widget">
                <div className="text-center flex mx-auto px-20" id="fecha">
                    <p className="diaSemana text-black px-1" id=""></p>
                    <p className="text-black px-1" id="dia"></p>
                    <p className="text-black px-1">de</p>
                    <p className="text-black px-1" id="mes"></p>
                    <p className="text-black px-1">del</p>
                    <p className="text-black px-1 "id="año"></p>
                </div>

                <div className="pl-36 py-5 flex mb-10" id="reloj">
                    <p className="text-black text-4xl" id="horas"></p>
                    <p className="text-black text-4xl">:</p>
                    <p className="text-black text-4xl "id="minutos"></p>
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