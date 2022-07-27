// Main Page

import SDGGrid from '../components/SDGGrid'


function Main(){
   return (
    <>
    <section>
           <h1 className='heading'>Welcome to SDG: Learn & Goals</h1>
    </section>
        <section className='main-container'>
        <div>
            <SDGGrid />
        </div>
        </section>
    </>
   ) 
}

export default Main