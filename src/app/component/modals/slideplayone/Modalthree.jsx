import { Card, CardBody } from "react-bootstrap";
import icqrcode from '../../../assets/img/img-qrcodeinfo.png'

export default function Modalone() {
  return (
    <div>
        <Card>
            <CardBody>
            <img className=" w-100 radius-10"
                src={icqrcode}
            alt="bannerslides"
                          />
            </CardBody>
        </Card>
    </div>
  )
}
