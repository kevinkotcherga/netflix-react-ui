import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import './listitem.scss'

const ListItem = () => {
  return (
    <div className='list-item'>
      <img
        src="https://leclaireur.fnac.com/wp-content/uploads/2021/12/avatar.jpg"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="itemInfoTop">
          <span>1 heure 14 mins</span>
          <span className='limit'>+16</span>
          <span>2009</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis deserunt iusto repellendus, distinctio amet atque officia reiciendis doloribus unde molestiae fugiat architecto inventore possimus eligendi natus saepe minima quia aliquid.
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  )
}

export default ListItem
