import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export const Transactions = () => {
    const Button = ({type}) => {
        return(
            <Btn>
                <button className={"buttonType " + type}>{type}</button>
            </Btn>
        )
    }
  return (
      <Container>
          <Typography variant ="h6" className="title">
              Latest Transactions
          </Typography>
          <table>
              <tr className='th'>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
              </tr>
              <tr>
                  <td className="avatar">
                      <Avatar 
                      style={{width : "40px", height : "40px"}}
                      src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"/>
                      <span>Allan Paul</span>
                  </td>
                  <td>2 Jun 2021</td>
                  <td>$222</td>
                  <td><Button type="Declined"/></td>
              </tr>
              <tr>
                  <td className="avatar">
                      <Avatar 
                      style={{width : "40px", height : "40px"}}
                      src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"/>
                      <span>Allan Paul</span>
                  </td>
                  <td>2 Jun 2021</td>
                  <td>$222</td>
                  <td><Button type="Approved"/></td>
              </tr>
              <tr>
                  <td className="avatar">
                      <Avatar 
                      style={{width : "40px", height : "40px"}}
                      src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"/>
                      <span>Allan Paul</span>
                  </td>
                  <td>2 Jun 2021</td>
                  <td>$222</td>
                  <td><Button type="Pending"/></td>
              </tr>
          </table>
      </Container>
  )
};

const Container = styled.div`
    .title{
        padding-bottom : 1rem;
        font-weight : 600;
        font-size : 1.1rem;
    }
    table{
        width : 100%;
        border-spacing : 15px;
    }
    .avatar{
        display : flex;
        align-items: center;
        gap : 0.5rem;
    }
    .th{
        text-align: left;
    }
    td{
        font-size: 0.9rem;
        font-weight: 600;
    }
`
const Btn = styled.div`
        .buttonType{
            border : transparent;
            cursor : pointer;
            padding : 0.3rem 0.4rem;
            border-radius: 5px;
            font-weight: 500;
        }
        .buttonType.Approved{
            background-color : #6efab465;
            color : #033b21c6;
        }
        .buttonType.Declined{
            background-color : #f66d8463;
            color : #720303c5;
        }
        .buttonType.Pending{
            background-color : #6d82f662;
            color : #033372c5;
        }
    `