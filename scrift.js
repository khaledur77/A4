let interviewlist = [];
let rejewctedlist = []

let total = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');


const allcardsection = document.getElementById('all-cards')
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')
// interviewlist.push({name:'kha 1'},{name:'kha 1'})
//console.log(mainContainer)
const allfilterbtn = document.getElementById('all-filter-btn');
const interviewfilterbtn = document.getElementById('interview-filter-btn');
const rejectedfilterbtn = document.getElementById('rejected-filter-btn');
// allfilterbtn.addEventListener('click',function(){
//     alert("click from")
// })

function calculatecount(){
    total.innerText = allcardsection.children.length
    interviewCount.innerText = interviewlist.length
    rejectedCount.innerText = rejewctedlist.length
}
calculatecount();

function toggleStyle(id){
    allfilterbtn.classList.remove('bg-blue-400', 'text-white');
    interviewfilterbtn.classList.remove('bg-blue-400', 'text-white');
    rejectedfilterbtn.classList.remove('bg-blue-400', 'text-white');

    allfilterbtn.classList.add('bg-white', 'text-gray-500');
    interviewfilterbtn.classList.add('bg-white', 'text-gray-500');
    rejectedfilterbtn.classList.add('bg-white', 'text-gray-500');
    
    const selected = document.getElementById(id)
   
   selected.classList.add('bg-blue-400', 'text-white')
   selected.classList.remove('bg-white', 'text-gray-500')
}

mainContainer.addEventListener('click',function(event){
    
    console.log(event.target.classList.contains('interview-btn'));

   if(event.target.classList.contains('interview-btn')){
        const parenNode = event.target.parentNode.parentNode;
        const project = parenNode.querySelector('.project').innerText
        const address = parenNode.querySelector('.address').innerText
        const task = parenNode.querySelector('.task').innerText
        const about = parenNode.querySelector('.about').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText

        const cardinfo ={
         project,
         address,
         task,
         about,
         status,
         notes
        }
        const projectexist = interviewlist.find(item => item.project == cardinfo.project)

        if(!projectexist){
         interviewlist.push(cardinfo)
        }
        renderInterview()
    }
})

function renderInterview(){
    filterSection.innerHTML = ''

    for(let interview of interviewlist){
        console.log(interview);
       
        let div = document.createElement('div');
        div.classname = 'card flex justify-between mt-8 bg-white p-8'
        div.innerHTML = `
        <div class="space-y-4">
                    
                    <div>
                        <h2 class="project text-[#002C5C] font-semibold text-2xl">Mobile First Corp</h2>
                        <p class="address text-gray-600 text-[15px]">Access road, Bakolia, Chattogram</p>
                        <p class="task text-[20px] font-medium">React Native Developer</p>
                    </div>
                    
                    <ul class="about flex gap-6">
                        <li>Remote</li>
                        <li>Part-time</li>
                        <li>$80000-$130000</li>
                    </ul>
                    
                    <p class="status">Not Applied</p>
                    <p class="notes">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    
                    <div class="flex gap-5">
                        <button class="interview-btn border-1 text-emerald-400 px-4 py-1 rounded-[4px]">INTERVIEW</button>
                        <button class="reject-btn border-1 text-red-500 px-4 py-1 rounded-[4px]">REJECTED</button>
                    </div>
                </div>
                
                <div><img src="Trash.png" alt=""></div>`

                filterSection.appendChild(div)
    }
}
