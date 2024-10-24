
export default function Team() {
    return (
        <div className="flex flex-col h-screen items-center">
            <img className="w-full object-cover" src="https://cambiafx.pe/themes/cambiafx/assets/img/bg-top2.png" alt="" />
            <div className="absolute flex flex-col items-center mt-10">
            <h2 className="text-[#0e2e76] text-4xl">Team</h2>
            <div className="text-white px-6 text-justify md:w-[70%] mt-8">
                <p>En nuestro equipo de desarrollo, estamos comprometidos en ofrecer lo mejor de nosotros para crear una experiencia única en el intercambio de monedas. Nos une la pasión por la tecnología y la innovación, y trabajamos incansablemente para asegurar que nuestra app sea eficiente, segura y fácil de usar.</p>
                <p>Cada uno de nosotros aporta habilidades únicas que, en conjunto, nos permiten superar los retos más complejos. Nuestra meta es no solo cumplir con las expectativas, sino también superarlas, brindando soluciones de alta calidad para nuestros usuarios.</p>
                <p>Creemos en la mejora continua, en la colaboración efectiva y en el poder de una visión compartida. Con cada línea de código y cada nueva función, nos acercamos a crear una plataforma que revolucionará la forma en que se realizan los cambios de moneda. ¡Estamos aquí para marcar la diferencia!</p>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#0e2e76] to-transparent mt-28"></div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-28">
                <div className="w-40 h-80">
                    <img className="border rounded-xl shadow-lg w-40 h-64 object-cover" src="https://mighty.tools/mockmind-api/content/human/63.jpg" alt="" />
                    <div className="p-2">
                        <h2 className="text-[#0e2e76] font-bold">Ronnie</h2>
                        <h3 className="text-xs text-gray-400">Junior Developer</h3>
                    </div>
                </div>
                <div className="w-40 h-80">
                    <img className="border rounded-xl shadow-lg w-40 h-64 object-cover" src="https://mighty.tools/mockmind-api/content/cartoon/9.jpg" alt="" />
                    <div className="p-2">
                        <h2 className="text-[#0e2e76] font-bold">Carlos</h2>
                        <h3 className="text-xs text-gray-400">Junior Developer</h3>
                    </div>
                </div>
                <div className="w-40 h-80">
                    <img className="border rounded-xl shadow-lg w-40 h-64 object-cover" src="https://mighty.tools/mockmind-api/content/cartoon/25.jpg" alt="" />
                    <div className="p-2">
                        <h2 className="text-[#0e2e76] font-bold">Joseph</h2>
                        <h3 className="text-xs text-gray-400">Junior Developer</h3>
                    </div>
                </div>
                <div className="w-40 h-80">
                    <img className="border rounded-xl shadow-lg w-40 h-64 object-cover" src="https://mighty.tools/mockmind-api/content/human/5.jpg" alt="" />
                    <div className="p-2">
                        <h2 className="font-bold">Augusto</h2>
                        <h3 className="text-xs text-gray-400">Junior Developer</h3>
                    </div>
                </div>
                <div className="w-40 h-80">
                    <img className="border rounded-xl shadow-lg w-40 h-64 object-cover" src="https://mighty.tools/mockmind-api/content/cartoon/10.jpg" alt="" />
                    <div className="p-2">
                        <h2 className="text-[#0e2e76] font-bold">Jean Pierre</h2>
                        <h3 className="text-xs text-gray-400">Junior Developer</h3>
                    </div>
                </div>
                <div className="w-40 h-80">
                    <img className="border rounded-xl shadow-lg w-40 h-64 object-cover" src="https://mighty.tools/mockmind-api/content/human/41.jpg" alt="" />
                    <div className="p-2">
                        <h2 className="text-[#0e2e76] font-bold">Jose Javier</h2>
                        <h3 className="text-xs text-gray-400">Junior Developer</h3>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}


