import react from 'react'

class Avatar extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          url: ""
        };
      }

      request() {
         fetch("https://api.thecatapi.com/v1/images/search")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                url: result[0].url
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      componentDidMount() {
        this.request();

        while(this.state.url.includes("mp4")) {
            this.request();
        }
      }
    
      render() {
        const { error, isLoaded, url } = this.state;
        if (error) {
          return <div>Помилка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Завантаження...</div>;
        } else {
          return (
            <img style={{maxHeight: '100%', maxWidth: 'auto'}}src={url} alt="" />
          );
        }
      }
}
 
export default Avatar;
