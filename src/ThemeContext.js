import React,{Component ,createContext} from 'react';
export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
    state = {
        isLightTheme :true,
        light : {syntax : '#555', ui: "#ddd", bg: '#eee'},
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
    }
    toggleTheme= () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
        const theme = this.state.isLightTheme? this.state.light : this.state.dark;
        document.body.style = "background:"+theme.bg;
      }
    render() {
        return (
           <ThemeContext.Provider value = {{...this.state,toggleTheme:this.toggleTheme}}>
           {this.props.children}
           </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;