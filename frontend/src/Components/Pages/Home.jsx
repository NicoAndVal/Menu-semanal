import React from 'react'




const Home = () => {

    return (
        <div className='home'>
            <img className='home_banner' src={require('./img/Banner.jpg')} alt="Banner" />
            <div className='home_card'>
                <h3 className = 'home_card__title'>COMO FUNCIONA EL PLANIFICADOR</h3>
                <i class="fas fa-cogs home_card__icon"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita a, cupiditate dolor facilis maiores quisquam consequatur tempore blanditiis autem at sit, cum rem fugit aspernatur quibusdam, nesciunt eum voluptates.</p>

            </div>

            <div className='home_card'>
                <h3 className = 'home_card__title'>PARA QUIÉN ESTÁ DIRIGIDO ESTE PLANIFICADOR</h3>
                <i class="far fa-lightbulb home_card__icon"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita a, cupiditate dolor facilis maiores quisquam consequatur tempore blanditiis autem at sit, cum rem fugit aspernatur quibusdam, nesciunt eum voluptates.</p>
            </div>
            <div className='home_card'>
                <h3 className = 'home_card__title'>BENEFICIOS DE PLANIFICAR TUS COMIDAS SEMANALES</h3>
                <i class="fas fa-heart home_card__icon "></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita a, cupiditate dolor facilis maiores quisquam consequatur tempore blanditiis autem at sit, cum rem fugit aspernatur quibusdam, nesciunt eum voluptates.</p>


            </div>


        </div>
    )
}

export default Home
