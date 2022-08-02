import React from 'react';
import "./HomePage.scss";

const HomePage = () => {
    return (
        <main className='home-page'>
             <nav className='home-page__nav'>

            </nav>
            <article className='home-page__main'>
               
                <section className='home-page__post'>
                    <div className='home-page__top'>
                        <p className='home-page__name'>
                            Muhammad
                        </p>
                        <p className='home-page__date'>
                            2022-08-02
                        </p>
                    </div>
                    <p className='home-page__text'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.
                    Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                    similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
                    Et harum quidem rerum facilis est et expedita distinctio.
                    </p>
                    <div className='home-page__bottom'>
                        <img src="" alt="comment" />
                        <img src="" alt="like" />
                    </div>
                </section>
            </article>
        </main>
    );
};

export default HomePage;