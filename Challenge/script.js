//ROOt 1  Which is  Order 1

const root1={
    biscuits: document.querySelector('[data-biscuits="10" ]'),
    donuts: document.querySelector('[data-donuts="13" ]'),
    pancakes: document.querySelector('[data-pancakes="0"]'),
    status: document.querySelector('[data-delivered="false"]'),
}

   document.querySelector('dl[data-key="order1"] div.biscuits dd.count').innerHTML=root1.biscuits.dataset.biscuits
   document.querySelector('dl[data-key="order1"] div.donuts dd.count').innerHTML=root1.donuts.dataset.donuts 
   document.querySelector('dl[data-key="order1"] div.pancakes dd.count').innerHTML=root1.pancakes.dataset.pancakes
   document.querySelector('dl[data-key="order1"] div.status dd').innerHTML=root1.status.dataset.status==='false'? 'delivered': 'pending'

   

// ROOT 2 Which is order 2

   const root2={
    biscuits: document.querySelector('[data-biscuits="5" ]'),
    donuts: document.querySelector('[data-donuts="0" ]'),
    pancakes: document.querySelector('[data-pancakes="2"]'),
    status: document.querySelector('[data-delivered="false"]'),
}

   document.querySelector('dl[data-key="order2"] div.biscuits dd.count').innerHTML=root2.biscuits.dataset.biscuits
   document.querySelector('dl[data-key="order2"] div.donuts dd.count').innerHTML=root2.donuts.dataset.donuts 
   document.querySelector('dl[data-key="order2"] div.pancakes dd.count').innerHTML=root2.pancakes.dataset.pancakes
   document.querySelector('dl[data-key="order2"] div.status dd').innerHTML=root2.status.dataset.status==='false'? 'delivered': 'pending'

  //ROOT 3 Which is order 3
   const root3={
    biscuits: document.querySelector('[data-biscuits="12" ]'),
    donuts: document.querySelector('[data-donuts="11" ]'),
    pancakes: document.querySelector('[data-pancakes="15"]'),
    status: document.querySelector('[data-delivered="true"]'),
}

   document.querySelector('dl[data-key="order3"] div.biscuits dd.count').innerHTML=root3.biscuits.dataset.biscuits
   document.querySelector('dl[data-key="order3"] div.donuts dd.count').innerHTML=root3.donuts.dataset.donuts 
   document.querySelector('dl[data-key="order3"] div.pancakes dd.count').innerHTML=root3.pancakes.dataset.pancakes
   document.querySelector('dl[data-key="order3"] div.status dd').innerHTML=root3.status.dataset.status==='True'? 'pending': 'delivered'

   