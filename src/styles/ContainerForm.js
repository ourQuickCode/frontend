import styled from 'styled-components'

import { colors } from './Variables'

export const ContainerForm = styled.form`
    background: ${colors.mainBackgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin: 0 auto;
    width: 100vw;
    border: none;
`
export const ContainerSection = styled.section`
    background: ${colors.mainBackgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 100vh; */
    margin: 0 auto;
    width: 100vw;
    /* height: 100vh; */
    border: none;
    border-radius: 24px;
    overflow-y: scroll;
    /* margin-bottom: 100px */
    padding-bottom: 100px;
`
export const ContainerMenu = styled.section`
    background: ${colors.mainBackgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 100vh; */
    margin: 0 auto;
    width: 100vw;
    min-height: 300px;
    padding-bottom: 20px;
    /* height: 100vh; */
    border: none;
    /* border-radius: 24px; */
    overflow-y: scroll;
    /* margin-bottom: 100px */
    /* padding-bottom: 100px; */
`
export const ContainerSectionLocal = styled.section`
    background: ${colors.primaryBackgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 100vh; */
    margin: 0 auto;
    width: 100vw;
    /* height: 100vh; */
    border: none;
    border-radius: 24px 24px 0px 0px;
    /* overflow-y: scroll; */
    /* margin-bottom: 100px */
    /* padding-bottom: 100px; */
    transform: translateY(-20px);
`
export const ContainerLocal = styled.form`
    background: transparent;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* height: 100vh; */
    margin: 0 auto;
    width: 100vw;
    border: none;
    overflow-y: scroll;
    /* margin-bottom: 100px */
    padding-bottom: 100px;
`

export const MapContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
