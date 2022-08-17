<template>
  <div class="post">
    <div class="post-container">
        <div class="title-block">
            <div class="tag">{{data5.tag}}</div>
            <div class="title">{{data5.title}}</div>
            <div class="date">{{data5.date}}</div>
        </div>
        <div class="fb-block">
            <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/s" data-width="" data-layout="standard" data-action="like" data-size="small" data-share="true" data-colorscheme="dark"></div>
        </div>
        <div class="img-block">
            <img :src="data5.img" alt="">
        </div>
        <div class="intro">{{data5.intro}}</div>
        <div class="content" v-html="data5.content"></div>
        <div class="epilogue">
            <div class="symbol-left">
                <div class="dot">“</div>
            </div>
            <div class="symbol-right">
                <div class="dot">”</div>
            </div>
            {{data5.epilogue}}
        </div>
        <div class="next"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const data1 = ref({
    tag: '服務介紹',
    title: 'Miss Eco 企業服務簡介',
    date: '2022/08/15',
    img: '/post/post1.jpg',
    intro: '當ESG、永續、減碳減廢成為趨勢，各大企業栽培綠色人才、加入RE100承諾在生產鏈與能源上轉型、透過循環經濟減少廢棄物的產生，而有更多企業領先一步，從辦公室的永續日常生活中做起，讓公司夥伴對於企業的永續發展也有一樣強烈的使命感與認同！',
    content: `Miss Eco 邀請企業共同打造綠色辦公室日常，看看以下是否有任一服務符合您的需求呢?
                <ol>
                    <li>1. 企業環保日：循環餐盒外送，讓同仁輕鬆體驗零廢棄午餐，傳達降低一次性餐具浪費的綠色理念。</li>
                    <li>2. 每月一蔬食：循環餐盒外送，搭配多元潮流蔬食，達到零廢棄與低碳飲食的加成效果，讓同仁透過輕鬆的午間用餐，實踐低碳永續的行動。</li>
                    <li>3. 醫學議題講座：循環餐盒外送，享用午茶點心或是健康餐盒，搭配健康醫學知識講座，讓同仁夥伴心理、生理都收穫滿滿！</li>
                </ol>
                <h4 style="background-color: #C8EEC8;font-size:16px;display: inline-block; margin: 30px 0px 10px 0px;line-height: 25px; font-weight: 700"># 企業環保日：循環餐盒，體驗永續午餐</h4>
                <p>一份永續的午餐，不僅透過循環的環保餐盒達到減廢，也搭配環境友善的食材（小農有機、格外品、醜蔬果），打造具有質感與新奇體驗的永續饗宴。<br><br>Miss Eco平台提供一站式服務，只要5天前填寫訂餐表單，平台為您推薦客製化的餐點設計，提供35+從低GI健康便當、義式咖啡廳、日式居酒屋、美式party food到下午茶點心和手搖杯，各種聚餐類型的服務。並且循環餐盒會當日回收，送往符合衛福部規範的場域進行專業清洗與高溫消毒！<br><br>透過美食，和員工一起體驗最日常的辦公室永續生活！</p>
                <h4 style="background-color: #C8EEC8;font-size:16px;display: inline-block; margin: 30px 0px 10px 0px;line-height: 25px; font-weight: 700"># 每月一日蔬食：蔬食減碳日常</h4>
                <p>根據國健署的統計，只要一個人執行一週一日蔬食環保餐，一年即可減少101.4公斤碳排放！因此Miss Eco在2022年4月與國際社會企業Green Monday合作，推出企業地球月的活動，與27+企業共同減少了1000kg以上的碳排放！<br><br>從企業聚餐每個月一次的蔬食，讓同仁認識新的蔬食潮流，不再是刻板印象裡的加工素料，而是有美式Beyond Meat漢堡、西班牙海鮮燉飯、台式新豬肉熱炒、雲南酸辣芭芭絲，有趣新奇的美食照顧公司夥伴的健康，也能從日常生活發揮企業減碳的影響力！</p>
                <img src="/post/post2.png" style="margin-top: 20px;"/>
                <p>圖片來源：Green Monday粉專</p>
                <h4 style="background-color: #C8EEC8;font-size:16px;display: inline-block; margin: 30px 0px 10px 0px;line-height: 25px; font-weight: 700"># 醫學議題演講，提升員工健康知識</h4>
                <p>在享用永續午餐的同時，也能一起聽聽健康醫學、環境永續的知識！<br>Miss Eco創辦團隊為中西醫學背景，透過企業講座、工作坊、品牌Podcast #Health Impact 意識生活希望將最新的國際醫學期刊健康知識分享給更多人。<br>在企業的健康促進演講中，Miss Eco 會分享植物性飲食的營養價值、飲食與情緒的關聯、中醫穴道與食療等多樣化的主題，將日常生活中就能做到的健康小知識傳遞給企業夥伴，讓大家在忙碌的上班生活中，也能有意識地照顧自己的健康。</p>
                <img src="/post/post3.jpg" style="margin-top: 20px;"/>
                <p>圖片來源：2021.11 美科講堂 Miss Eco演講</p>
            `,
    epilogue: 'Miss Eco相信，人們不是不環保、不愛海龜、喜歡製造垃圾或討厭北極熊，而是在忙碌的工作生活中，缺少了自由選擇的權利。或許下一次的企業聚餐，一起在辦公室體驗『永續午餐』，讓循環經濟與減碳減廢輕鬆融入日常生活！',
    nextPostTitle: '相關文章：居家隔離、居家檢疫、自主健康管理防疫旅館懶人包',
    nextPostLink: ''
})

const data2 = ref({
    tag: '服務介紹',
    title: '全台首創，環保外送！',
    date: '2022/08/15',
    img: '',
    intro: 'Miss Eco是全台首創零廢棄環保外送服務，與健康永續的餐飲業者合作，透過循環餐具外送餐點，減少外送製造的大量一次性垃圾。期待打造永續新日常，結合環境與便利的新選擇！',
    content: `
                <img src="/post2/post1.jpg" style="margin-top: 20px;"/>
                <h4 style="background-color: #C8EEC8;font-size:16px;display: inline-block; margin: 30px 0px 10px 0px;line-height: 25px; font-weight: 700">#外送便利，卻也造成驚人的垃圾量</h4>
                <p>您也叫過外送嗎？信用卡公司統計，光是外送平台的刷卡訂單每月就達到600萬筆！而在臺灣疫情最嚴重的五、六月，外送的訂單量又再成長超過40%，因為無法外食、又不能煮飯、外送成為必須。
                    <br>然而外送帶來了方便也帶來了大量的一次性垃圾，一份外送餐點，有主餐的紙碗、湯麵要分開的塑膠袋、飲料杯、飲料的吸管套，高級一些的餐廳還有醬料盒、配菜盒、手提塑膠袋...。這幾百萬筆的外送消費，造成幾萬噸的垃圾造成嚴重的汙染，同時帶來大量碳排，並影響極端氣候。
                </p>
                <h4 style="background-color: #C8EEC8;font-size:16px;display: inline-block; margin: 30px 0px 10px 0px;line-height: 25px; font-weight: 700">#循環餐盒美食，一份即送！</h4>
                <p> Miss Eco使用設計感、保溫良好之循環餐盒盛裝餐點，外送過程中零廢棄，沒有任何一次垃圾，簡單4️步驟就可以使用環保外送服務。
                    <br>✅ 2小時前預約訂餐，店家8.5公里內皆可外送
                    <br>✅ 使用後餐盒簡易清洗、不留廚餘
                    <br>✅ 一個月內歸還餐盒
                    <br>✅ 線上付款包含Line pay、信用卡。
                </p>
                <h4 style="background-color: #C8EEC8;font-size:16px;display: inline-block; margin: 30px 0px 10px 0px;line-height: 25px; font-weight: 700">#創新歸還模式，不用出門就能還餐盒！</h4>
                <p>您可能會問，那循環餐盒怎麼歸還呢？
                    <br>只要在下次訂餐時（一個月內），把之前用過的餐盒還給外送員就可以囉，不用自己出門最方便！
                    <br>這是Miss Eco 考量到大家叫外送就是為了方便，因此引進了全球首創的環保外送 #美國Deliverzero 的創新模式，創造 #環保也能很方便的可能！不僅如此，這樣的創新模式也讓逆物流的碳排為0，也是對地球更好的選擇！
                </p>
                <ul style="margin-top: 10px">
                    <li style="margin-top: 10px">【方法1｜下次訂餐歸還】
                        <br>一個月內，於平台再次訂餐時，選擇想歸還的餐盒數目，於外送員送餐時時將餐盒交給外送夥伴！
                    </li>
                    <li style="margin-top: 10px">【方法2｜自行歸還】
                        <br>一個月內，抵達任何一家合作店家，即可登入平台網站，出示Qrcode給店家掃描，成功歸還！
                    </li>
                </ul>
                <img src="/post2/post2.png" style="margin-top: 20px;">
                <h4 style="background-color: #C8EEC8;font-size:16px;display: inline-block; margin: 30px 0px 10px 0px;line-height: 25px; font-weight: 700"># 永續新日常，從今天開始</h4>
                <p>我們相信人們不是不環保、不愛海龜、討厭北極熊，或喜歡製造垃圾，而是忙碌的生活中，缺少自由選擇的權利，Miss Eco環保外送為您打造兼顧便利與環境友善的永續新日常！或許從今天晚餐開始，試試看創新的服務，感受生活另一種，友善地球的可能！</p>
            `,
    epilogue: '',
    nextPostTitle: '相關文章：居家隔離、居家檢疫、自主健康管理防疫旅館懶人包',
    nextPostLink: ''
})

const data3 = ref({
    tag: '服務介紹',
    title: '舉辦一場永續活動，零廢棄的低碳饗宴吧！',
    date: '2022/08/15',
    img: '',
    intro: '',
    content: `
                <img src="/post3/post1.png" style="margin-top: 20px;"/>
                <p>圖片來源：2021.11 美科講堂 Miss Eco演講</p>
                <p style="margin-top: 20px">您最近忙著籌備、舉辦的活動是什麼呢?是一場循環工作坊、SDGs永續論壇、綠能高峰會，還是企業ESG大型活動呢?Miss Eco為您的永續活動，量身打造低碳饗宴！</p>
                <ol style="margin-top: 20px">
                    低碳饗宴 服務特色
                    <li>1. 減廢循環：循環餐盒午餐，搭配循環飲料吧</li>
                    <li>2. 低碳食材：環境友善的食材，原型食物、醜蔬果(格外品)、在地小農、低碳蔬食</li>
                    <li>3. 多元美食：從午餐、下午茶點心、飲品於平台一手包辦</li>
                </ol>
                <h4 style="background-color: #C8EEC8;font-size:16px;display: inline-block; margin: 30px 0px 10px 0px;line-height: 25px; font-weight: 700">＃減廢循環</h4>
                <p>若您的活動主題緊扣著環保、永續與共好，也許您可以考慮導入時下新潮流，搭配低碳饗宴服務，讓您的整場活動輕鬆實踐環保低碳排。Miss Eco低碳饗宴使用循環餐盒盛裝美食佳餚、午茶點心，包含飲料良品都是循環容器盛裝再為您外送上菜，過程零廢棄，沒有任何一次性垃圾。光是一場百人論壇活動，幾個紙餐盒、竹筷、塑膠湯匙與飲料杯，就能減少超過500+一次性垃圾！</p>
                <img src="/post3/post2.png" style="margin-top: 20px;"/>
                <h4 style="background-color: #C8EEC8;font-size:16px;display: inline-block; margin: 30px 0px 10px 0px;line-height: 25px; font-weight: 700">＃低碳食材</h4>
                <p>同時Miss Eco平台合作的35+餐廳，從精緻餐盒、水煮健康餐到日式、義式、美式再到台式熱炒，甚至潮流蔬食各種豐富選項、類型應有盡有。合作餐廳選用永續食材，包含在地小農產品、低碳蔬食、格外品、醜蔬果，以原型食物、健康料理入菜，呈現最純淨的美味、最環保的饗宴。</p>
                <img src="/post3/post3.png" style="margin-top: 20px;"/>
                <img src="/post3/post4.png" style="margin-top: 20px;"/>
                <h4 style="background-color: #C8EEC8;font-size:16px;display: inline-block; margin: 30px 0px 10px 0px;line-height: 25px; font-weight: 700">為什麼要使用Miss Eco低碳饗宴呢?</h4>
                <p>2021聯合國IPCC ，第六次氣候變遷評估報告，地球已經升溫1.07°C，未來極可能在2040年前，跨越1.5°C的升溫警戒線，造成更巨大的影響，氣候災難更頻繁、更劇烈。
                    <br>2020 Science 《打破塑膠浪潮》指出現行回收系統僅 14% 垃圾被回收，而其中有 70% 為食品相關一次性廢棄物，研究表示地球急需新的資源使用模式，否則 20 年後海洋的垃圾累積會成長 4 倍，比魚的重量還多。
                    <br>環境問題是真實存在的，而且他的速度飛快。
                    <br>我們相信人們，其實不是不環保、不愛海龜、討厭北極熊，或有誰特別喜歡製造垃圾，而是缺少自由選擇的權利。環境議題不該總是站在便利生活的對立面。
                    <br>Miss Eco希望打造一個兼顧環境與快速便利的新選擇，讓您可輕鬆方便的舉辦一場零廢棄、低碳的餐飲饗宴！邀請您與我們一起從自身做出改變，透過一場一場的綠色活動將這份理念、愛地球的心共同擴散宣揚，讓與會貴賓更能身歷其境，了解透過生活模式的調整，也能為地球盡一份心！除了對外活動，企業內部訂餐、會議餐盒，都邀請您使用Miss Eco服務，讓我們一起打造永續新日常！
                </p>
            `,
    epilogue: '',
    nextPostTitle: '相關文章：居家隔離、居家檢疫、自主健康管理防疫旅館懶人包',
    nextPostLink: ''
})

const data4 = ref({
    tag: '服務介紹',
    title: '關於兩個醫學生的創業',
    date: '2022/08/15',
    img: '',
    intro: '',
    content: `
                <img src="/post4/post1.jpg" style="margin-top: 20px;"/>
                <p style="margin-top: 20px;">
                    大家好，我是MissEco環保外送的共同創辦人Summer，謝謝你點開文章，很開心可以與你分享我們的創業二三事，小小的溫暖故事，關於一年前的起點。今年六月，我們剛從中醫系(Summer)、中西醫雙修畢業(妍廷)，並在七月時考取了醫師執照，考前可讓我們緊張焦慮到極點，雖然不過是一張紙，但可是價值百萬的昂貴紙張呀。學醫的我們，究竟為什麼開啟了打造永續新日常的旅程呢?
                    <br><br>這要從我們的初心開始，想和大家分享一句話
                    <br><span style="font-weight: 700;">"Always be more than a doctor"</span>
                    <br><br>如果只當一個醫生，我們的人生可能一眼就望見了底。實習醫學生畢業後成為pgy、接下來變成住院醫師、總醫師再變成主治。幸運一點了人成為主任、更厲害的當了院長。但我們不這麼想、也不甘於如此，如果這樣度過一生，心底是有些遺憾的。我和夥伴在意社會議題、人權、女性，以及孩子的教育、人們的健康。我們積極參與NGO活動、工作坊研習、海外交流，校內外的活動，希望為社會帶來一點除了醫學以外的良善影響力。舉實際的例子來說，我們希望可以成為雙手有力的人，例如俄烏戰爭、阿富汗女性困境、香港現況，諸如此類的世界角落，也許未來我們能為受到迫害的人們，帶來一方安全淨土與溫暖生活的可能。這樣會很好，我們認為這就是生命的意義，綻放微光為需要的人們尋找屬於他的溫柔鄉。
                    <br><br>這些怎麼講起來跟環境沒有擦邊，那麼為什麼我們選擇了這個主題創業呢?
                    <br>說起我自己對環保的淵源，那大概是因為，大學七年的時間很長，抱著一顆自由的心，我喜歡到處旅行遊走、打工換宿、短居異地。四年前，大三的時候，到了臺東換宿，遇到人生第一個環保的啟蒙老師，當時大家去逛夜市，他帶了大大小小的餐盒分給小幫手們各自盛裝，我第一次了解到，原來世界上有這樣的生活模式。接著夥伴帶大家去淨灘，那也是我第一次淨灘！山派海派，我是海派！當時看見所愛的沙灘滿是垃圾，心底留下強烈的衝擊。
                    <br>三年前，我用家教存的錢，前往澳洲Working Holiday，跑去跳傘、過得很快活，回來後不久澳洲發生大火。還在那的朋友傳了火燒後的土地照片給我，新聞播報死傷無數的無尾熊與野生動物，當時的我看了很心痛，那片我曾踩踏的美麗土地，竟然遭遇這樣的浩劫。我突然意識到極端氣候離我們這樣近。再也不是北極熊的家消失、電視裡的遙遠新聞，為了我所愛的土地，我必須做出改變。
                    <br><br>氣候問題是真實存在的，而且他的速度飛快。
                    <br>聯合國IPCC ，第六次氣候變遷評估報告，地球已經升溫1.07°C，未來極可能在2040年前，跨越1.5°C的升溫警戒線，造成更巨大的影響。Lancet是醫學界很有指標性的期刊，其中一篇研究告訴我們，氣候問題不僅環境影響也影響著人們的健康，例如空汙影響孩子肺部發育、免疫系統、孕婦早產、老人增加心臟病、腎臟病的風險。
                    <br><br>除了環境議題，這也是我們的世代，遇上疫情，COVID-19大流行，大大的改變了人們的生活模式，work from home，想先請教大家一個問題，您平時使用外送嗎？我不會，因為覺得很奢侈。接著想問大家，疫情之下，原本不使用的人，您也開始使用外送嗎？在臺灣疫情最嚴重的五、六月，外送的訂單量成長超過40%。因為無法外食、又不能煮飯、外送成為必須。
                    <br><br>COVID-19與宅經濟的相互作用之下，外送平台強勢崛起，帶來了方便也帶來了大量的一次性垃圾，光是紙類容器就增加三倍，幾萬噸的垃圾造成嚴重的汙染，同時帶來大量碳排，而碳排直接影響極端氣候。根據調查顯示，臺灣外送人口已經超過500萬人；環保局統計：六都總量將近兩萬噸，成長15%。你可能沒什麼感覺，講的簡單一些，這是一篇science的期刊，若無作為的以這樣速度製造垃圾，2050年海洋中的垃圾重量可能超過魚類。
                    <br><br>改變勢在必行，環境議題若無解，所有的倡議似乎都無法再走更遠。地球乘載了多少人們的理念與夢想，如果狀況持續惡化，溫度持續上升，直到有一天地球蹦就爆炸了，我們在意的家人、愛人、朋友，關注的議題，努力的目標都沒有意義了。所以，我們在2021年五月正式成立了Miss Eco，我們期待打造一個兼顧便利與環境永續的新選擇，提供人們一個不同的生活方式，我不確定未來的世界會是什麼樣貌，但我們確定這條路我們會一直走下去。
                </p>
                <img src="/post4/post2.jpg" style="margin-top: 20px;"/>
                <img src="/post4/post3.jpg" style="margin-top: 20px;"/>
            `,
    epilogue: '',
    nextPostTitle: '相關文章：居家隔離、居家檢疫、自主健康管理防疫旅館懶人包',
    nextPostLink: ''
})

const data5 = ref({
    tag: '服務介紹',
    title: '周一無肉日，用蔬食救地球！',
    date: '2022/08/15',
    img: '/post5/post1.jpg',
    intro: '蔬食不僅可以促進健康，因為碳排量少也能造福環境，光是一周訂定一天蔬食日就能降低非常多的碳排。接下來讓我們從健康和環境的角度來為大家介紹蔬食飲食，當然，如果你喜歡，歡迎使用Miss Eco的服務，一起用蔬食救地球。！',
    content: `
                <h4 style="background-color: #C8EEC8;font-size:16px;display: inline-block; margin: 30px 0px 10px 0px;line-height: 25px; font-weight: 700">從健康角度簡單來說：</h4>
                <p>現今衆多健康飲食指南，大多推薦以蔬果類爲主。頂尖醫學期刊，新英格蘭醫學期刊（NEJM），證實得舒飲食（DASH Diet）具有降血壓的效果。而得舒飲食其中一個原則是每日五種蔬菜五種水果。
                    <br><br>衛福部國民健康署的每日飲食指南手冊建議每日攝取3 - 5種蔬菜。蔬果含有大量膳食纖維，可以增加飽足感，幫助排便和維持腸道健康。蔬菜也具有大量營養素，礦物質，基本上只要足夠分量足夠多樣性，根本不需要另購益生菌或健康產品啊！
                </p>
                <h4 style="background-color: #C8EEC8;font-size:16px;display: inline-block; margin: 30px 0px 10px 0px;line-height: 25px; font-weight: 700">從環境角度來説：</h4>
                <p>我們從溫室氣體排放量來看飲食和環境的關係。牛津大學開發的平臺 Our World in Data（用數據看世界），顯示各種食物的溫室氣體排放量。
                    <br><br>食物溫室氣體總排放量的計算方法是從土地的使用開始計算，接著是農場畜牧養殖、動物的飼料的生產、食物的加工及處理，至運輸、零售、包裝。
                    <br><br>我們這裏列舉碳排放最多前三名和最少的前三名：
                    <br>碳排放第三名是起司，每生產一公斤起司的碳排放量為21公斤。
                    <br>碳排放亞軍是羊肉，每生產一公斤牛肉的碳排放量為24公斤。
                    <br>碳排放冠軍是牛肉，遙遙領先，每生產一公斤牛肉的碳排放量為60公斤。
                    <br><br>牛和羊都是反芻動物，食物在它們的腸道中發酵會產生甲烷，是一種比二氧化碳鎖著更多熱能的溫室氣體。
                    <br>而牛和羊的碳排放會差距那麽多，關鍵原因在於土地使用的改變。爲了牧養牛牛們，需要大量砍伐森林，將儲存在樹木、植物及泥土中的碳釋放到大氣之中。
                    <br><br>碳排最低的三位分別是：
                    <br>根莖類蔬菜和蘋果并列，每生產一公斤的碳排放量為 0.4 公斤。
                    <br>柑橘類，每生產一公斤的碳排放量為 0.3 公斤，比動物性食物低 10 至 50 倍。
                    <br>堅果類，目前碳排放量接近ZERO。原因是堅果樹目前種植在已經開墾的農地，且碳會儲存在堅果樹中，因此在土地使用這部分是可以減少碳排放的。
                </p>
                <h4 style="background-color: #C8EEC8;font-size:16px;display: inline-block; margin: 30px 0px 10px 0px;line-height: 25px; font-weight: 700">我們可以怎麽做：</h4>
                <img src="/post5/post2.jpg" style="margin-top: 20px;"/>
                <p style="margin-top: 20px">
                    1) 慢慢來，比較快。階段性地改變的飲食習慣。健康是一輩子的事情，重點在於持之以恆。你可以在下一餐多增加1種蔬菜，一個禮拜後再增加1種，慢慢適應和調整。
                    <br>
                    2) 另外，你也可以一個禮拜選一天作爲無肉日，簡單一點則無肉餐。
                    <br>
                    3) 選擇當季當地的蔬果，即新鮮好吃，又便宜。根據台灣當季蔬果網站的資料顯示，例如12月盛產蔬菜為A菜、高麗菜、南瓜、盛產水果則為椪柑(橘子)、百香果和釋迦。
                    <br>
                    4) <span style="background-color: #C8EEC8">選擇Miss Eco提供的企業服務，每月一蔬食或每周一蔬食</span>，提供企業一站式的服務，使用循環餐盒搭配潮流多元、美味健康蔬食，讓同仁透過輕鬆的午間用餐，實踐低碳永續的行動，達到零廢棄與低碳飲食的永續辦公室日常。
                </p>

                <ol>
                    有意識的生活，讓生活更有意思。
                    <li>
                        1）<a href="https://www.nejm.org/doi/full/10.1056/nejm199704173361601" target=_blank"">A Clinical Trial of the Effects of Dietary Patterns on Blood Pressure | NEJM</a>
                        2）<a href="https://www.hpa.gov.tw/Pages/EBook.aspx?nodeid=1208" target=_blank"">衛生福利部國民健康署 - 每日飲食指南手冊 (hpa.gov.tw)</a>
                        3）<a href="https://www.greenpeace.org/taiwan/update/18386/%E6%88%91%E5%80%91%E5%90%83%E7%9A%84%E9%A3%9F%E7%89%A9%E5%92%8C%E6%B0%A3%E5%80%99%E6%9C%89%E9%97%9C%EF%BC%9F%E9%A3%9F%E7%89%A9%E7%A2%B3%E6%8E%92%E6%94%BE%E4%B9%8B%E7%8E%8B%E6%98%AF%E2%8B%AF/?gclid=Cj0KCQiAtJeNBhCVARIsANJUJ2FZHooz_2e-xF_zqVDYWhjzoPBuCveZ74gYZab9PdU9D5U5Xixh84YaAj12EALw_wcB" target=_blank"">我們吃的食物和氣候有關？食物碳排放之王是⋯ - Greenpeace 綠色和平 | 臺灣</a>
                        4）<a href="https://www.hpa.gov.tw/Pages/List.aspx?nodeid=4530" target=_blank"">衛生福利部國民健康署 - 環境友善飲食專區 (hpa.gov.tw)</a>
                        5）<a href="https://www.twfood.cc/" target=_blank"">當季好蔬果 (twfood.cc)</a>
                    <li>
                </ol>
            `,
    epilogue: '',
    nextPostTitle: '相關文章：居家隔離、居家檢疫、自主健康管理防疫旅館懶人包',
    nextPostLink: ''
})

onMounted(()=>{
    const id = route.params.postId
    console.log(id)
})


// interface Props {
//   label?: string;
// }
// const props = withDefaults(defineProps<Props>(), {
//   label: '',
// });

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.post
    background-color: #FFFBED
    padding: 40px 20%
    display: flex
    justify-content: center
    .post-container
        max-width: 980px
        .title-block
            .tag
                color: #9C9C9C
                display: none
            .title
                font-size: 20px
                font-weight: 700
                margin-bottom: 2px 
            .date
                color: #9C9C9C
        .fb-block
            filter: grayscale(80%)
            margin: 20px 0px 10px 0px
            .fb-like
                filter: hue-rotate(290deg)
                // filter: saturate(40%)
        img
            margin-bottom: 25px 
        .intro
            color: #749279
            border-left: solid 5px #749279
            padding-left: 10px
            margin-bottom: 20px
            line-height: 25px
        .content
            line-height: 25px
            margin-bottom: 40px
        .epilogue
            line-height: 25px
            border-top: solid 1px #78A780
            border-bottom: solid 1px #78A780
            padding: 20px 30px
            position: relative
        
            .symbol-left
                position: absolute
                top: 0
                left: 0
                background-color: #FFFBED
                display: flex
                align-items: center
                transform: translateY(-50%)
                padding: 0px 0px
                .dot
                    width: 100%
                    height: 100%
                    font-size: 50px
                    transform: translate(-30px, 10px)
                    color: #78A780
            .symbol-right
                position: absolute
                bottom: 0
                right: 0
                background-color: #FFFBED
                display: flex
                align-items: center
                transform: translateY(50%)
                padding: 0px 10px
                .dot
                    width: 100%
                    height: 100%
                    font-size: 50px
                    transform: translate(30px, 10px)
                    color: #78A780
@media (max-width: 992px)
    .post
        padding: 40px 10%
</style>