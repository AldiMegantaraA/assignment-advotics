import React, {useState} from 'react'
import './filter-period.styles.scss'
import moment from 'moment'
import PopupDate from '../popup-date/popup-date.component'
import CalendarIcon from '../../assets/calendar (1).png'
import dropDown from '../../assets/dropdown.png'

export default function FilterPeriod() {
    const [tanggalAwal, setTanggalAwal] = useState(moment(new Date()).format("Do MMMM yyyy")) 
    const [tanggalAkhir, setTanggalAkhir] = useState(moment(new Date()).format("Do MMMM yyyy")) 
    const [showPopUp, setShowPopUp] = useState(false)

    return (
        <>
            <div className='filter-period'>
                <a  style={{alignItems:'center', display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'2px 12px'}} onClick={() => setShowPopUp (!showPopUp)}>
                    <img style={{marginRight:'22px'}} src={CalendarIcon} alt="" />
                    <p style={{marginRight:'22px'}}>Periode</p> 
                    {tanggalAwal + ' ' + '-' + ' ' + tanggalAkhir} <img style={{width:'12px', height:'12px', marginLeft:'16px'}}  src={dropDown} alt="" />
                </a>
            </div>
            {
                showPopUp ? <PopupDate props={tanggalAwal, tanggalAkhir} setTanggalAwal={setTanggalAwal} setTanggalAkhir={setTanggalAkhir} /> : '' 
            }
        </>
    )
}