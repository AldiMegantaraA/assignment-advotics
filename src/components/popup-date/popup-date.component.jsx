import React, {useState} from 'react';
import Calendar from 'react-calendar'
import './popup-date.styles.scss'
import 'react-calendar/dist/Calendar.css';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars'
import moment from 'moment';


export default function PopupDate({tanggalAwal, tanggalAkhir, setTanggalAwal, setTanggalAkhir}) {
    const [day, setDay]=useState(false);
    function filter(e, type) {
        e.preventDefault()

        switch(type) {
            case 'today':
                setTanggalAwal(moment(new Date()).format("Do MMMM yyyy"))
                setTanggalAkhir(moment(new Date()).format("Do MMMM yyyy"))
                break;
            case 'yesterday':
                setTanggalAwal(moment(new Date()).subtract(1, 'days').format("Do MMMM yyyy"))
                setTanggalAkhir(moment(new Date()).format("Do MMMM yyyy"))
                break;
            case 'last 7 days':
                setTanggalAwal(moment(new Date()).subtract(7, 'days').format("Do MMMM yyyy"))
                setTanggalAkhir(moment(new Date()).format("Do MMMM yyyy"))
                break;
            case 'last 30 days':
                setTanggalAwal(moment(new Date()).subtract(30, 'days').format("Do MMMM yyyy"))
                setTanggalAkhir(moment(new Date()).format("Do MMMM yyyy"))
                break;
            case 'this month':
                setTanggalAwal(moment().clone().startOf('month').format("Do MMMM yyyy"))                
                setTanggalAkhir(moment().clone().endOf('month').format("Do MMMM yyyy"))
                break;
            case 'custom':
                setTanggalAwal(moment().format("Do MMMM yyyy"))                
                setTanggalAkhir(moment().format("Do MMMM yyyy"))
                break;
        }
    }
    return (
        <>
            <div className='popup-date'>
                <div className='date-pick'>
                    {
                      day == 'today' ? <a className='filter' href='#' onClick={(e) => {filter(e, 'today'); setDay('today')}} style={{backgroundColor:'#37B04C', color: '#fff', fontWeight:'bold'}}>Today</a> : <a className='filter' href='#' onClick={(e) => {filter(e, 'today'); setDay('today')}}>Today</a>
                    }
                    {
                      day == 'Yesterday' ? <a className='filter' href='#' onClick={(e) => {filter(e, 'yesterday'); setDay('Yesterday')}} style={{backgroundColor:'#37B04C', color: '#fff', fontWeight:'bold'}}>Yesterday</a> : <a className='filter' href='#' onClick={(e) => {filter(e, 'yesterday'); setDay('Yesterday')}}>Yesterday</a>
                    }
                    {
                      day == 'Last 7 Days' ? <a className='filter' href='#' onClick={(e) => {filter(e, 'last 7 days'); setDay('Last 7 Days')}} style={{backgroundColor:'#37B04C', color: '#fff', fontWeight:'bold'}}>Last 7 Days</a> : <a className='filter' href='#' onClick={(e) => {filter(e, 'last 7 days'); setDay('Last 7 Days')}}>Last 7 Days</a>
                    }
                    {
                      day == 'Last 30 Days' ? <a className='filter' href='#' onClick={(e) => {filter(e, 'last 30 days'); setDay('Last 30 Days')}} style={{backgroundColor:'#37B04C', color: '#fff', fontWeight:'bold'}}>Last 30 Days</a> : <a className='filter' href='#' onClick={(e) => {filter(e, 'last 30 days'); setDay('Last 30 Days')}}>Last 30 Days</a>
                    }
                    {
                      day == 'This Month' ? <a className='filter' href='#' onClick={(e) => {filter(e, 'this month'); setDay('This Month')}} style={{backgroundColor:'#37B04C', color: '#fff', fontWeight:'bold'}}>This Month</a> : <a className='filter' href='#' onClick={(e) => {filter(e, 'this month'); setDay('This Month')}}>This Month</a>
                    }
                    {
                      day == 'custom' ? <a className='filter' href='#' onClick={(e) => {filter(e, 'custom'); setDay('custom')}} style={{backgroundColor:'#37B04C', color: '#fff', fontWeight:'bold'}}>custom</a> : <a className='filter' href='#' onClick={(e) => {filter(e, 'custom'); setDay('custom')}}>Custom</a>
                    }
                    
                    {/* <a className='filter' href='#' onClick={(e) => {today(e); setDay('today')}}>Today</a>
                    <a className='filter' href='#' onClick={(e) => filter(e, 'yesterday')}>Yesterday</a>
                    <a className='filter' href='#' onClick={(e) => filter(e, 'last 7 days')}>Last 7 Days</a>
                    <a className='filter' href='#' onClick={(e) => filter(e, 'last 30 days')}>Last 30 Days</a>
                    <a className='filter' href='#' onClick={(e) => filter(e, 'this month')}>This Month</a>
                    <a className='filter' href='#' >Custom</a> */}
                    <button className='btn-apply'>APPLY</button>
                </div>
                <CalendarComponent value={tanggalAwal} onClick={(e) => filter(e, 'custom')} onChange={(e) => setTanggalAwal(moment(e).format("Do MMMM yyyy"))} ></CalendarComponent>
                <CalendarComponent value={tanggalAkhir} onClick={(e) => filter(e, 'custom')} onChange={(e) => setTanggalAkhir(moment(e).format("Do MMMM yyyy"))}></CalendarComponent>
            </div>
        </>
    )
}