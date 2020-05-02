import React from 'react'
import PageTitle from './page-title';

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <PageTitle page_title="Whoops! Content not found!" />
      </div>
    )
  }
}
