import playImage from '../../assets/img/banner.png';

export default function Banner() {
  return (
    <div className="d-none d-md-block mt-4">
      <img src={playImage} className="w-100" />
    </div>
  );
}
