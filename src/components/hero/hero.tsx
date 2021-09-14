// @ts-nocheck
import useStyles from './styles';



const Hero = ({ input, setInput }) => {
const classes = useStyles();
  return (
      <div className={classes.hero} >
        <div className={classes.heroContainer}  >
            <div className={classes.heroContent} >
             
                {/* <h1>Unsplash</h1>
                <p>
                The internet’s source of freely useable images.
                Powered by creators everywhere.
                </p>
                <div className={classes.heroSearchForm} >
                <form>
                    <input type="text" 
                    placeholder="Search free high-resolution photos" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>
                </form>
                </div>
                <div className={classes.trendingSearchTags}  class="trending-search-tags">
                <p>Trending searches: <a href="#">flower</a>, <a href="#">wallpaper</a>, <a href="#">sad</a>, <a href="#">love</a></p>
                </div>
            </div>
            </div>
            <div className={classes.heroOverlay}  class="hero-overlay"></div> */}
            </div>
            </div>
    </div>
  );
};
export default Hero;
