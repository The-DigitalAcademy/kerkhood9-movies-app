import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

function Home() {
  return (
    <div className='mb-5'>
      <Header name="Movies" />
      <div className='container'>
        <div className='row'>
          <Card 
            image='https://www.thebeyondnews.com/assets/admin/images/postimage/The-beyond-news-Doctor%20Strange%20in%20the%20Multiverse%20of%20Madness%20Movie%202022-%20release%20date,%20cast,%20story,%20teaser,%20trailer,%20first%20look,%20rating,%20reviews,%20box%20office%20collection%20and%20preview.jpg'
            name='Doctor Strange Multiverse of Madness'
            price='R500'
          />

          <Card
            image='https://sportshub.cbsistatic.com/i/2022/04/18/ccb71c63-2cf3-44dd-8078-0846f97a874c/thor-love-and-thunder-poster.jpg?auto=webp&width=864&height=1280&crop=0.675:1,smart'
            name='Thor Love and thunder'
            price='R4000'
          />

          <Card
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpenZ7mfDd3JcGBZGT1rS-BRblyfXBOMJE0w&usqp=CAU'
            name='Bease'
            price='R1600'
          />

          <Card
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8p5ldazsuz83WNzWY_HUnCdJxgvpViP3fQ&usqp=CAU'
            name='Brahastra'
            price='R100'
          />

          <Card
            image='https://cdn.moviefone.com/admin-uploads/posters/morbius-movie-poster_1638710998.jpg?d=360x540&q=50'
            name='Morbius'
            price='R1000'
          />
          <Card 
            image='https://cdn.moviefone.com/admin-uploads/posters/super-pets-movie-poster_1656124357.jpg?d=360x540&q=50' 
            name='Superpets'
            price='R500' 
          />
          <Card
            image='https://cdn.vox-cdn.com/thumbor/l45XEEqbJXzQf6LTnTT_pVZzg1M=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22488068/image_2021_05_03_090558.png'
            name='Wakanda forever'
            price='R450'
          />

          <Card
            image='https://m.media-amazon.com/images/M/MV5BZTZhYzk1ZDYtMmMwMS00YzhlLWI0MmEtZWI1ZjU1YTdlZmJmXkEyXkFqcGdeQXVyMzYzNzc1NjY@._V1_.jpg'
            name='street of fight'
            price='R12500'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
