
const ArtCard = ({data}) => {
  return (
    <div>
        <img src={data.path} />
        <h3>{data.title}</h3>
    </div>
  )
}

export default ArtCard