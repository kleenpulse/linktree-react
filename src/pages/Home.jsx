import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import { github, slack, hero } from "../assets";

const Home = () => {
  return (
		<div className="App">
			<div className="container">
				<div className="link__img">
					<img
						height={100}
						width={100}
						src={hero}
						alt="profile photo"
						id="profile__img"
					/>
					<p className='p-text' id="twitter">kleen_pulse</p>
					<p className='p-text' id="slack">Isaac Gideon</p>
				</div>
				<div className="links">
					<a href="https://twitter.com/kleen_pulse" target="_blank">
						Twitter Link
					</a>
					<a href="https://training.zuri.team/" id="btn__zuri" target="_blank">
						Zuri Team
					</a>
					<a href="https://books.zuri.team/" id="books" target="_blank">
						Zuri Books
					</a>
					<a
						href="https://books.zuri.team/python-for-beginners?ref_id=isaacgideon"
						id="book__python"
						target="_blank"
					>
						Python Books
					</a>
					<a href="https://background.zuri.team/" id="pitch" target="_blank">
						background checks on coders
					</a>
					<a
						href="https://books.zuri.team/design-rules"
						id="book__design"
						target="_blank"
					>
						Design Books
					</a>
					<a id="contact">
                        <Link to="/contact">Contact Me</Link>
                    </a>
					<div className="logos">
						<img src={slack} alt="slack" />
						<img src={github} alt="github" />
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Home