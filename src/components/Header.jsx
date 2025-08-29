import logoimage from "../assets/images/chef-claude-icon.png"

export default function Header(){
    return (
        <header>
            <img src = {logoimage} alt = "Chef Claude Logo"/>
            <h1>Chef Claude</h1>
        </header>
    )
}