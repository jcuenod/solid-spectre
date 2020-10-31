import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'
import Avatar from './components/Avatar/Avatar'
import DropdownMenu from './components/Menu/DropdownMenu'
import MenuItem from './components/Menu/MenuItem'
import Divider from './components/Menu/Divider'

function App() {
  return (
    <div style="margin: 10px">
      <Button leftIconName="edit">Hello World</Button>
      <br />
      <br />
      <Button size="large" style="primary" badge="3">A large primary button + badge</Button>
      <br />
      <br />
      <Avatar initial="JC" size="large" presence="online"></Avatar>
      <br />
      <br />
      <div style="max-width: 200px">
        <DropdownMenu label="Menu Test">
          <MenuItem>Something</MenuItem>
          <MenuItem>Really</MenuItem>
          <MenuItem>Divider...</MenuItem>
          <Divider></Divider>
          <MenuItem>Something else</MenuItem>
          <MenuItem>And another</MenuItem>
          <Divider content="Divider WITH TEXT"></Divider>
          <MenuItem badge="2">Item with Badge</MenuItem>
          <MenuItem>Another Item</MenuItem>
        </DropdownMenu>
      </div>
    </div >
  )
}

export default App