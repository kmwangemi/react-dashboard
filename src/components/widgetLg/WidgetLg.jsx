import './widgetLg.css'

const WidgetLg = () => {
   return (
      <div className="widgetLg">
         <h3 className="widgetLgTitle">Latest Transactions</h3>
         <table className="widgetLgTable">
            <tr className="widgetLgTr">
               <th className="widgetLgTh">Customer</th>
               <th className="widgetLgTh">Date</th>
               <th className="widgetLgTh">Amount</th>
               <th className="widgetLgTh">Status</th>
            </tr>

            <tr className="widgetLgTr">
               <td className="widgetLgUser">Customer</td>
               
            </tr>
         </table>
      </div>
   )
}

export default WidgetLg
