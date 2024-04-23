import './services.css';
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const ReadMoreButton = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div>   
    <div className='row'>
      <div className='col-sm-3'>
      <figure>
    <img src="https://assets.gqindia.com/photos/5d933f025d883c0008e2df1b/1:1/w_1080,h_1080,c_limit/call%20of%20duty.jpg" alt="Mountains" width={500}/>
    <figcaption><button><ShoppingCartIcon />The Day</button></figcaption>
</figure>
    </div>
    <div className='col-sm-3'>
    <figure>
    <img src="https://play-lh.googleusercontent.com/c15fVxquhZ_LO5jPc-f2nYpz-EHvphyniI4JCKG8hYd-yXkhq5k4WpSJMu-M9S3vIA" alt="Mountains" width={500}/>
    <figcaption>The Day</figcaption>
</figure>
    </div>
    <div className='col-sm-3'>
    <figure>
    <img src="https://play-lh.googleusercontent.com/sjk0NynlA3oNJaw8ridRp602w5Zx5c00hk1sXYIOGbdWIYtyVSx-voB37SMyMxinGseH" alt="Mountains" width={500}/>
    <figcaption><button><ShoppingCartIcon />The Day</button></figcaption>
</figure>
    </div>
    <div className='col-sm-3'>
<figure>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuIglavJb0w9gLJ18vB-1GKk6pKhmCO7o-Q&usqp=CAU" alt="Mountains" width={500}/>
<figcaption>The Day</figcaption>
</figure>
</div>

    </div>
    <div className='row'>
    <div className='col-sm-3'>
    <figure>
    <img src="https://m.media-amazon.com/images/M/MV5BNzU2YTY2OTgtZGZjZi00MTAyLThlYjUtMWM5ZmYzOGEyOWJhXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg" alt="Mountains" width={500}/>
    <figcaption>The Day</figcaption>
</figure>
    </div>
    <div className='col-sm-3'>
    <figure>
    <img src="https://img.freepik.com/premium-photo/movie-poster-design_841014-8862.jpg?size=626&ext=jpg" alt="Mountains" width={500}/>
    <figcaption>The Day</figcaption>
</figure>
    </div>
    <div className='col-sm-3'>
    <figure>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/46/TheForest_Game.jpg/220px-TheForest_Game.jpg" alt="Mountains" width={400}/>
    <figcaption>The Day</figcaption>
</figure>
    </div>
    <div className='col-sm-3'>
      <figure>
      <img src="https://i.gadgets360cdn.com/products/large/MV5BMjM3YTlhYmQtZWIwNC00NWQ3LThlMTAtM2FhODBiMGMzZTE3XkEyXkFqcGdeQXVyNTgyNTA4MjM-.-V1-FMjpg-UX1000-1000x1500-1666785273.jpg"/>
      <figcaption>The Day</figcaption>
      </figure>
    </div>
    </div>

    <div className='row'>
    <div className='col-sm-3'>
    <figure>
    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRUZGRgaGBgYGBoYGhocGBgYGBoZGhgcHBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQkISs0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQMAwgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAD8QAAIBAgQDBQYFAgQGAwEAAAECAAMRBBIhMUFRYQUicYGREzJCobHBBhTR4fBSYnKCkvEVIzNTorJjc9IW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAKBEAAgICAgEEAQQDAAAAAAAAAAECERIhAzFBBBNRgWEiMkJxkaHh/9oADAMBAAIRAxEAPwDopzuSMZZUrPXs8QoqSwWSdA4zGOWkNOEUS8DZhZklcsZIlGmyGoXKShEPeVYQ2agBE4RCNKWhFopaS0taS0Jilpy0vactMYoROES8loTAismWEtJaazArTuWEtOZZrNRUCcIhMs4VgsagdpJfLOwWajTBlwt5ZqciCI2LQF0InbnaNlAYMpwgyGoogjJp6XlESGSJKQ0YgfYEwNekRwj7uFBtvoBBCuAve7x+HpJvmplVxWjNZbSk3cPVAIug7w2tcEcd76zN7QohGupupJy63I6GGHqIyliGXBKMchMiVMpVrhdTtMx+0Sx7qki+nM9ZSfNGHbG4PR8vPeC0u29L/JqGSZZxzrqy6eFran+axnD41XGnpNDnhJ10/hh5fQ8vFHOk18p2MmS0oKksHlrRx0yWktOhhLC02RsWUyzoWW0ktBYaK5ZMsIFlskFhoCBIRCZZy0wQeWSEyyTWY2yOksMPfWOonMSlRNdL2nPmV9spSpIiPUcEhASANibaDnvb1nnW7YxTG60aarwX2YOnUk3PymmcY6VcjuQhIsNLBTbXa5ANzvpbjeX7VV0TPTQPcjYFhlPxLlIvwMjnbdnQoUkkiuC7QNe10yOLKyhQFuT7yncg6aHa3Gd7fx70WWlhkVjlzO7KGYE7WvoIkler3GRVXQksga/dy30YkWIY8OG8bw93UuxzMoAY6E5fhawA04Xtyi5XS8DY1b8nexsUcSXo4imFdVzq6ALcXsSbfEMw6G+2k0OxsGVd84R1y3GZFJzAi+pG24tMGm7o5cEoSNDpfLcFjqDpZeXA21EvhMfXIJzuLuRspYqb2vcbgLw5nThJybT0UgrVsVX8QYhbZsNSZAWFlQLax+Agmx25zW7URCiVU0VwLrzuMwIHwkWIIg3oNa7XvfUtprzMWGIZ7JmJQHurwAGnK4Op0O0SMq2UlFNUeax5Z6mQbZtOWw18N5orhFRFZ3SmrEhS5tnItmsADoLjXQRXGH2WIUn3GIbw0yt6b+c2MWyFVV8+iugKAMGR9WXUi1+Yv4R+Ke233f8Aot6yLXHxxjqNXry/yLVsCUv7R0SzhDnYjvMMy6gEEEa3vMauBScEe6eWwHEeGxm62MZwyqWRmdWsFVlCJTCBczG97De0wsYc1UIvDTz3b0H0Mfmm3G/NqifoY1yNfxp38dHsvws4qJVR0pFlAKMaVO4BBtm7vesQNTqeMV/D9FGfPVAtmyKrAWeo4JC2tbQBjbwiOBZqbllYqcjAEAX0sTod9AdOggO1S2ZAhNqb51/+wnMWuN7aLfpK202l5OOotJvwaTYMpixTFrZ795Q65NSe6wsbAEeUWwzviKlsqrnchFRFQKhPduABc21JPXhD167uDULEkoEUkKDZ7ad3j7/qeUFh0ZEZxcM3cRhwJ98i/Iaf5jGjK1f19iSik68d/Rs9qJSeglWiBlVylwALgEoSSN9U3/uvxmd2U/8AzkXKrAsAwdQwK6k7g2Om8U7KZ6SPTDHICGZQAQUJAfUju201uNzvGMOro9kax712W3uAEkjcagdd5lJ4tPtGcVkmumaHaeMdMYlCnhqLoQhb/lrmFyc5zA7AC97SnbKolUqlrAC4GwJ4dNLaTLPa+IN1Lsc657WyMRdldVZbFTYXBubeU5hMLkUANmB1zHUtc6knne9+t4OF3IPOko/YedyywScYTps4iskreSYNHolxY4g+R/WOUqqGeK/OEbkzo7RA+I+k4T0Ees7TwFOutswDDYzH/wCEVEFlqd07gMwvbXWZw7U/vjFPtdRxJ8ouIVJo1uw6YKMNLg231B43mbiuwHzlqT2ub6Ei3Oxkp9poCSosWtfbW20e/PDKWzbDbjfhBVBcrdmU3ZDoO+5Y3uASSAeevGK4nD1jYJUZQL3Gp0O/0mhUxRYk38ByEC7db/SUUVRNzdi9Hseo7J7R7gglfEb2PA6ETYbCikl8rG39IubeHGD7OrZnGY6i5BJ02JP39Zo4jGjLpY9R/NJCUXdHRHkVWzyPa+Lw1Qf9Qq6nQFHuf7WBANrzNwnbL0+53XTYA3FuWUkAjwP7z01VEqOrVEV1BF8yhtOO/SUxvZdOnU7lNF0voo4+UR8UstM7Ies41xuMotr4bMHtDtkkZEyqCNWHvXuQQOW0J2bWoqbnMzldSF2ublVBNyfDf5T0vZGApOSHRGNtMyg28PK4jw7CoDVaFMf5F/SPGEsrsSXqOH2sFFr+vP8AZjJhy63TMnAEgq2o3HEbn5w6YK02kwltAAB0FpcYc8p1r8njylul0YKYBgdWOUCyrwGpP3MpTwVXPmeozLawUkmw0sANgBYadJ6B6BgTThpAfJIxcXhHI7jlDubEgG217bxZcFWCZfatcnfMfd3tflcA2noDTg2pxsYvbEzklSZhpg3ynO5LA5k5Keg4bDaDXFlWKuMoOxsSM3DwB2NhyPCbjJE6yjiJsI6rVBXLLae7KBxtB1HAmbXxlmYjiCB021+UTxOOLWtpYDje7W7zeeunCM5pMy42zV9pJMb/AIieQ/nnJD7kTe1IaxONZtjx00ANouuKYbgHxA0kyXnfYzlo67LpVU7r5/tHMNh1YXzDTrEfZaSClBiG6H6lEDUHSAFQk2gMvUxygvP5wpUJKQfDX5ecew1AMxBNtCdeY14efpO4BMzoii92UepA/X1mx2phxndgdA9u7bS4F7265vQzSlujKOrM2qipawF7b67HmNr7894Co+VS5ueNhueAEZqIWt008hMnt7Si9veBU6cLML6crQS0rCv1Ojbp9q4apTULSyoahpCotNswqZbpdrklSdyfQcBVVzorcQAjeIvb1H0MwOy67izioct1BXO2Wym+bLtfug3/AN5u+0sxI2b5jcSPE27svyYpKkN9lUTdiNClmPhex872no0UEBraMLj7ief7FqWqrc2BuDysefS9p66gipTsLEi+hII1vtNOTizQipIzRVTkZ32iRfFsGuGGU8xsfEcJlOjrtKxnZKUKNpih4wbqJi/mXHEjzhkxTHdjKKRJwNB6EVqIBylhitN4tVrx0yTiDrtaZGPq2U+kaxNaYuPq678I90jRjszK76xR30hajRSu+lpBs6EimaSCzTsQc9QUtKEiSo1osxJMoIGziVbWDCwqiCzUWQRmmJSmkfw6A8JmwUaPYV1dXy3F7X/pJvY/bzk7SxS0P+oSM7ZRb4mGtuRO8Ph6pAC204dJifjzF/8AIWiRcswe5GlluNGOl7nbl4ydu7HfSRTsftYpVNHEsAT3kdtMynXKSNMwuP5rNvH9jUnU1KbpTcbMD3G6Oo3B52v47H5Xica7IEezW0VmuWA8b79TNHsPtx6B7mVRxGtr8wCTrbmJzzUpbLwpaPV9n9hN+Yp0nDIrspZNcumtwNiv02M3cf2c1Ju/qD7rD3T+/SYafi8OVzqrAG65e66G26tpcnkLeM9T2N+IKRujvnRxs4Oa+tzqBccLjpF4+RxdMecFJfDRnYZ8u+s0qfaVulpj1u67KDcBmA8AbCdVrzrcUzmjJxNt8crjU3ECqj4W05TJa/lB9k1a9cZ6NEtTBAzZlDMOJVCbyUsYLZSNzekalZLRJjrNDE02RirixG/H6RCs8rAnNFTUgKuIgXr6xLEVt5VEWiYnFTKrvmvJiMSOPl+8XGKVjbKR4X/eZysKjRRtPGKOsYqNAVBEbKIFeSUzSRbCeldCTOilHGpW851UhAKLSl1pxsKJ1GAmyNQOnRmjhKBvtBU6w3jH/EFS+t+Wm8VyYcUalKgoUMxsP3tPO/jSsuYpcFU7hH93xfOw8pXHduHI2UDug5RwuNifOeT/ADJdkRyTnqKrf53AOu99ZOV+R41Zk4uiQy6HK1yt9iL2JHMXBHlNXsvCpnUObDS/SfQPxbRovgS4QI1MAUQNCrbKgsNRbh0vwnzf887sM+UsTaxQC2mjXFjfmfrEtuJRVarZ9c7OwmF9nkahQdSNStmYi3Nu8Dx0M8r2r2OMNiaSKzmhVdclwSyMTYqWtZhYnXcX9VOyu0QqklEDJYd0kXO3HThe55Q/a3auqOAymmQRmNxZiCCBfQGw9ZNsuo26Z6PH4QI7ICLhjudSNwfTXziitaErY5K6q5OVwnfB4gEAW694eV+U7h1HETp45KS0cXJBxlTLPTJUhbAkG19rkaX6RLsKqKRCF3VlsPZo5CtcWbVFJuBrfoJtKQbACwsdt9NTPEvib4pnci4bReBsBl2PeFrHr1kfUNUi/pntrweg7Z7RSkdXd1NlV3uWeyrck24fYRNsYGTMLi+1+PKaGO/FNCoStSkjUEIQEqoLORqqkm6qDbUb36TK7Rw4ZBVo2NPYqmY+zOuhBJ2tY66G+0bjnTSejTjBwbSd39UKPiSfCAqZza+lzoT3QT0vv4TzHb1S7i5NhYdOd7estha9mAJLhDdVTMQBa+w2vz31lZTa0iMeJOmzYxdM3Onue90vtAB14Cxhata4bKCoOUlTuO6uh8NYsg1uY8XaFkknSO1GitWpDPVHjAOwmbAgN5JbMJIthPYNWlDX6xYtrBs3EmGgZDrVbb8dusDWxFwQCQbb8jzkGIJp5LXt3hqTtvvt5QOHIY7qLAk35Dx3MX+wpiqHEDaoDyBBH6yU8cWfJVORuF/dPn9/pDo5ZrAi19yQAAN9TEaqK5IbbhzHKx4TONdMfK+zQxtHKjd6+nCK9gZfzCN3hlVyDcAE2y8tNGMWf2lNSmcMjCwLbryB/aTDU0Qhyb5gy6aCxGv1Em/yGMdaK/iTtE1ajKrMUW2Vb3TbVgOpG/hEMBUOcAqHB+EqGv4G4KnwIgsXcEi1t+R06Ebia/4ewD1CHWnmU3XMHVWVgNcoLAkEHaxmf7RksWh3D1cMVByMBp3RnuNb3902GnM7nnGMXSpNSKIjAnL33tca+8ANfmBEMBRK5lqoQ6kKVcEMtlHdINiDrx12mhWxChGWwVSLEAAaEa6WsZzNbOqLvQn2Xiit6LHIwGU5TmDBgbvbiCjHa17ieqw+NJph297UPYbMCVb5ieUZy7UWfT2aZXey2ZCodLsovfS2o01Efw2LvTOU/GTvf3hm19Z0cUf1a6OXnbq32ejGNVUL5m0upuLAZu7fNfrPGdpXzMxsHYlOtidzffQb9fR/G4h/y1Vb6NlNuZB4eV5lIGqIjuwRwhCXsDYk5nN9wbfMx5pWT4+rYpjmypkB2K6A6E63J/n1hRgsTQVHRyM6I9kqMps4vZgCATwIimI0YAkNfW4vr/lE3sXV7q965KqfK1rA8ACCLXPjpETTkkVaeLkef7RzvZnuXOrXsNTpcjQDaauDq01prRCZamfM1TukEZbBSb3ttwtqYtjictxwUnxtc6+giFDCNu5IJFwBpoedoa/Voyksd9GtiG7xtrt56QbEQGcwZMrbINK9BKjCCyGDcyZ4rDR3LOyntDJME2mxXSVep85Rgs5VqroBwlSaD06lvP8AglS++kCKxMjkkmYNB3fu8rn7CBcga7zlYWC+Z+f7QTGZoyCmoGGQi4tf5wQwacjbxOnWCSqM5Xjb7XM08LWOR1ABPvDQE8mGvT6SaSY1tdGK2IQMVdS6gWBWyv43tZj4/vNHDVUoI7UnDhxcBtCjAHR14nXcaGwEzHwtz4303tA4tMrBRy189oBnT14NnBYg5WZmLMxBJJ1JKi9zxJhMTUDAAGxJuNOH8vMqhU0UX1uB5QgfUd4aLY8Tz2Gx142kHHZ0xk0MYQOc4VrN3bDS29zcnltbxmphqeVQv+2g/Qb9JmYZgGLKCdLG1gPnDVajkZAAt9L+8x9dB5TohpX5OabuVXoPUfOxRzZKbWte7O/RRqbfy0WxtNqhUWBJuBfYZbE6jhqBpzga7rSUqvvHV20uTyB5SvY2ILVBb+ltza21zfzJiTWqHi6diVamUOUgX6aj5zSwrl0RfiBtfjkOo8bG/wC/DHxThnYjXvGx6A2E1ew0yguxOuii+w4nxP8AN4sY07HlK40XrnvuORt5WH6yuIe5uIGpUu7G9ruN/wDAg+0heH+Qr/Y/o40pLMZQtKECpMqZC0oWmGOySl52CwmpmuNYNhCNroNeUYodmu50HzEqtk20uxNIzTaaNX8OYlVzmkSoFyUswA65Tp5xP2ew1v52hSFckzmOOi25RJTH8ZQOgGoA4ecAtKwJOgUEnwGphkjRZlE2qX/ut9o/RrlGBBF+X7cfKZ9Wi3vG1mOhG1zrbW3OaePClQygLkDIwvdmOa2Y8CbncW320kVKmWcbRExdFz/2yfeBvl8jy6aTMKZqjG9wG3562EqiDeP4bCMVzAb6+kyeT6M1iuwJpcjYGKYdbNY8DNpMG3nMrFUytRgRYg68wbCGUUlYITbdDquADlHLzna9Y7rvbTzhuyezalfMtNcxGW/De/E+EPW7MdGKuuVgRceseCuIspJSPPOxZrtz1hnpn4dNLfW8vj8KUN7aH68oSil1zcOJ4C28m1Wh7vaE/wAvbLc6cf56x6nirjkOA+Q/SIVnznpw8L8epnEax6Dfqf2+8nZVKlsOH7zf4tPIAQlNr/KZ4fc9T9Y5gQWU+Nvlf7zLsD/aw5tBtaH9gZVqUoRBKg4zmnKEZBKKnKBhKWPIyQvs/D0khDRqUMDW3RBUH/wvTqn0pux+ULS7Sei1nQq3JwVPo0xXwqncRnD1qyDKlaqo4AO2T/Re0e2iTUZHscB+Onp2si2HC5t9Yr27+JFxCkpQSnUuDmU3B11zLbW/PeedSs4uGWk9981MA+IZLEHzl8yH4Mu3usfP3rwqX4B7cV0cTFPcm5B3IAJFuNh8IjGIxiugSwIy2YZSpLA3BLLe/DfkJMNVprmuW7ylfdvbzB+0VOGJ92ongSy/+wA+cXop2WwuHJKsr2ykEZjZhY84jjg7Mztc5mOp4nx4xoYNwDfbjls3/reAxd9jfz3i0hraEVHrNfC4l8oXISALXXp0N7+omfTpajNe3zmqqKSDYED4f0vpoL+sytdGlT7CvjCjZWOUjgwXjqNQCOXGYuOYvUZrjU3J0tr4aTSrLfQCym/d+EWta3I79Ig9HvWsR03PyhbctMVRUdoc7Kxz0swUlQQPdO9r2+sbfthzuzHqTc+sz0osBtYcS2g06tpOPiUG4RuoUqB4lbX9POFSxVAcMnZbtXEs6gMTbf62+pmQKpsVHuk3I685yrUJP6QatJSlkXjFRQQN6n5CcZrbfzhK3lTrANZ23dHnHcA5C2HE308opaO0AQgF9IY9iS6Dmow3NvE/Yayn5gDgW88o+5PynABOMnKPsTR0VyfgX/z/AP1ONUfKVzd07gWAPjbceMmWVIgZkByzkPaSYaz1X/8APppbEJbrofqZxewl/wC/T8zeW9p1Y3/uP6y6sOF/9Uvr4OS2do/h8sf+ohHMWln7AK7lT/hIEntuZPyP3lGqDmfT95mg5HV7OVRqPnf7RPH4UqC6a23Xc+X6Rg1PH+ecFicWEFzfoBe5gCpIxD2uu+RT43+xlj2wOCDwJa3peZnaTq7lguW+4HPn4xKSb2dEao3X7YUi3skv5j6RY9qckX1J+V5lkyt4LYcUaNTtVzyFtu6PvF3x9Q/G3kSPkIvIFi2xkkGpMSbkk+MYqHSDoU52vWuLW2hMBJvpb95JXWdCmKE7IDJaWB6iYwREj60+F4vhQWb5zU9gbX36AiMkTkxZUEsaI5zroR8B8xBkngIRSpoThpy1z1lSTygDZzJJO3P9MkJjfz24CEFU/wBIhjSH8/2nPYjrOjE48gJc8hOGoeQ+UO9AdbeECyDrA1RrOM5sbAX4eMwcQ5Y3c67bTcCDnA4ns9X1vZvkfGLLa0PGST2ebemCd5z8uOcdr4Qoe8LfQ+cFlkS6l8CjYeDNOPWlGQTDqQnlE6BGDQE6lEcb2gDYANaDZo0aM5+XExrFxLql4b2EslCY1ghh78YRMKY5Rw5JsBNPDYLLqd/pCkBySKYXCMi3BAJ36Q7M1vf+X7RoU5BSEYldmeWc6Fvr+k5iVvbL3bCx3NzrrNBqQ/hgHpL/AAzUG0IlbbsfCDc+PpG2pchAvS/tPr+sxrQDL/i/0/vJLeyHL/yH6SQUaz2dTDKNlv5MfpFvy5J0S3+U/czWvOFxPZl6dN/8PKXK0Y1XCso+L0H2MWdCN/mJ6MP4eggMdRzobakaiQ5PS0m0ykObdMw9JzOJaDFQqbjQzhs6COwIsRp1mXjsOFGYcTtNBjBOoYWI0iy2NF0YwAlGWXYQ9LCZlvmiVZbKhPLIBD1KLLuPOUEFBUgcsplss6EgNkdFuUIoHKREhaaDpA3QrnQSkTuJqU3uIoqZbEqbHY2Nj4HjGKDDYTRlsm+RMZB6yy+MoCZJY2QRgDoQYu6DlDFROGieH1ho2aEaiDlANTB3jr0zAFDyijKSF/Yr/LyQ/szykmDkj1SvIx5RVXEuXns+6ediqDK0LfrE83UzjP1MLkn5ESBYnCcVIHjtEHSP1al+vjFqi8lHrODmhG7idEJNdirU4IraMMrjlK5Oc5WVsx8XTsx1319YbBjQjrz+0ZxlEEA+XjAYbRvHeL5HytFcStlOm8zss18Ub6CBpUbsJmFSpCbUWGpEgWbrU7wb4QEbTOIPcMidVo3WwhWAKGI0NkmXSpzFx42PrOlxfu38/wBeMBknLGCgUjYStcXljWiGGfgYzLJk2kHSqYcVj0iQkz9YQUhl3Gmg6nXX1gz4iLs8qakVsKQx5iSKZ+skFjUehBM6GlPaThM78jjsMT1lHMraVXxmyMRllCkLeUdgNzEk7RrKMg5Hw/3i1SqBvp6E/KGbFJte/SLtRU/A/lrISS8FE/kDXZCNN+sUAjT4U8EPTT9Iu6nzk2ikWdVL8Y9gcOM3eNtDtM0LC4YZWDG2hhSNJ/k23ww/qHgYs+htGEq5/hHjLB1HAR8bEyoz8WhK91WPXl5CZjkjgZu4nEqo7qX+Q9Zk1awPw285OURoyFCTOo8a/LXAIOvEbfODNFuX0gxY7kgdJ+9tNCJeyPL6RtAbDfz4xoqhXKy5tBOsvLeyMegdCjgweUx8UTLexHOLQc0jOtJHPYiSDEOaHqLkneMDaSSdL7IMsNzJJJMKRNz/ADlOtOSQg8nGQcpxxeSSAJwoBsIi9JbnQcZJIDC5pD+Ewa6SSRJdFkPUXJ4xg7zkkC6Fl2SrovrMxXPOSSCXg0R+g1wPDkIOvo3lJJCuhZdgY0fdEkkKAuwQ3lwdZJJijC1totJJMxYlZJJJhz//2Q==" alt="Mountains" width={500}/>
    <figcaption>The Day</figcaption>
</figure>
    </div>
    <div className='col-sm-3'>
    <figure>
    <img src="https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg" alt="Mountains" width={500}/>
    <figcaption>The Day</figcaption>
</figure>
    </div>
    <div className='col-sm-3'>
    <figure>
    <img src="https://cdn-bgp.bluestacks.com/BGP/us/gametiles_com.kingsgroup.sos.jpg" alt="Mountains" width={500}/>
    <figcaption>The Day</figcaption>
</figure>
    </div>
    <div className='col-sm-3'>
      <figure>
      <img src="https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-780943-52.jpg"/>
      <figcaption>The Day</figcaption>
      </figure>
    </div>
    </div>

    <div className='row'>
    <div className='col-sm-4'>
    <figure>
    <img src="https://www.gameinformer.com/sites/default/files/styles/product_box_art/public/2021/04/19/bce7dfa5/rust.jpg" width={500}/>
    <figcaption>The Day</figcaption>
</figure>
    </div>
    <div className='col-sm-4'>
    <figure>
    <img src="https://m.media-amazon.com/images/M/MV5BYWIzYjUzMGUtZjJlNy00MWVlLWJjNGEtODU1OWFiOWIwOTFjXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg" alt="Mountains" width={500}/>
    <figcaption>The Day</figcaption>
</figure>
    </div>
    <div className='col-sm-4'>
    <figure>
    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg" alt="Mountains" width={500}/>
    <figcaption><button className='floor'><ShoppingCartIcon /></button></figcaption>
</figure>
    </div>
    </div>
    <div className='row'>
      <div className='col-sm-6'>
      <div>
  <input type="checkbox" class="read-more-state" id="post-1" />

  <p class="read-more-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span class="read-more-target">Libero fuga facilis vel consectetur quos sapiente deleniti eveniet dolores tempore eos deserunt officia quis ab? Excepturi vero tempore minus beatae voluptatem!</span></p>
  
  <label for="post-1" class="read-more-trigger"></label>
</div>
    </div>
    <div className='col-sm-6'>
    <div>
  <input type="checkbox" class="read-more-state" id="post-1" />

  <p class="read-more-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span class="read-more-target">Libero fuga facilis vel consectetur quos sapiente deleniti eveniet dolores tempore eos deserunt officia quis ab? Excepturi vero tempore minus beatae voluptatem!</span></p>
  
  <label for="post-1" class="read-more-trigger"></label>
</div>
    </div>
    </div>
    </div>
  );
};

export default ReadMoreButton;
 