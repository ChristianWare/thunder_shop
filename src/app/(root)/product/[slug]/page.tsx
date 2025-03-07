import Button from "@/components/shared/Button/Button";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import ProductImages from "@/components/shared/Product/ProductImages/ProductImages";
import { getproductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import styles from "./ProductDetailsPage.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getproductBySlug(slug);
  if (!product) notFound();

  return (
    <main>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <ProductImages images={product.images} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightContent}>
              <h1>Product Details Page</h1>
              <p>{product.name}</p>
              <p>{product.brand}</p>
              <p>{product.category}</p>
              <p>
                {product.rating} of {product.numReviews} Reviews
              </p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              {product.stock > 0 ? <p>In Stock</p> : <p>Out of Stock</p>}
              {product.stock > 0 && (
                <>
                  <Button text='Add to Cart' btnType='primary' href='#' />
                </>
              )}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                eveniet reprehenderit. Eos hic amet ipsam iusto ea iure dolorum,
                tempora reprehenderit! Rerum perspiciatis culpa, adipisci quo
                incidunt beatae error expedita, suscipit, minus molestias enim
                earum! Quis nemo repellat corporis. Obcaecati molestiae sint
                omnis, voluptatum ex vero qui pariatur. Qui distinctio harum
                veniam deserunt ullam accusantium sapiente officia enim dolorem
                cupiditate tempora reprehenderit vel magni, adipisci voluptas
                illo cum iste modi. Asperiores, cupiditate facilis! Cumque sed
                at ab atque quos facilis minus rerum tempore ipsam voluptate,
                labore hic placeat praesentium non iure consequuntur quaerat
                illo, officia voluptatum amet voluptates asperiores porro
                obcaecati! Officiis ab architecto similique nostrum blanditiis
                dolore distinctio et, voluptatibus, nihil amet sequi?
                Exercitationem voluptate aspernatur sunt, omnis fuga neque earum
                nulla perspiciatis eligendi a ex hic quisquam voluptates nisi ab
                consequuntur inventore! Consectetur deserunt, nesciunt
                voluptatibus dolores repellendus voluptas ullam distinctio nam
                aliquam labore alias natus quisquam blanditiis nulla fuga
                pariatur est tempore tempora enim ab esse! Veritatis culpa sint
                in provident ducimus quam nemo. Vitae ex quod, reiciendis cumque
                corporis quis. Impedit quasi ipsa laborum praesentium suscipit,
                ex repellendus eligendi dolore perspiciatis nemo. Maiores,
                laborum corporis a culpa, placeat quisquam consequuntur incidunt
                delectus minima debitis modi saepe ab animi. Quibusdam, facere
                error. Asperiores incidunt harum quia adipisci voluptatum modi
                cumque molestias dignissimos, accusantium suscipit nihil placeat
                quod consequuntur veritatis laborum quaerat sequi aliquid
                deserunt autem! Tempore soluta quas obcaecati, tempora rem
                deserunt voluptate enim aut expedita. Voluptates architecto
                ducimus aliquid beatae. Unde veritatis nobis non obcaecati
                laborum architecto dolor maiores. Esse quas, asperiores
                assumenda maxime expedita quia adipisci illum aperiam! Aliquid
                perferendis odit consectetur, praesentium ratione ut eveniet
                explicabo illum quidem magni, modi atque nobis. Excepturi,
                quasi. Porro vel commodi ad consequatur tempore quo! Labore
                provident recusandae ducimus, sequi quae animi dolor cupiditate
                corporis porro consectetur, ipsum ut, aliquam eligendi delectus
                rerum incidunt atque repudiandae doloribus quidem. Praesentium
                harum placeat omnis recusandae minus iusto tempora
                necessitatibus doloremque cumque sequi non iste quas, sapiente
                temporibus maxime deserunt ullam tempore inventore quos alias.
                Placeat aperiam nesciunt iste quod, sint, suscipit earum neque
                nihil numquam unde libero temporibus! Suscipit repudiandae
                assumenda quibusdam eligendi. Minus expedita ad, similique
                minima obcaecati animi nihil est in, repellendus illum iste
                pariatur voluptatibus corrupti cum alias nemo eius
                necessitatibus veniam eveniet maxime rerum officia mollitia
                quibusdam? Necessitatibus vero quaerat quis tempore qui?
                Sapiente quasi amet, vero iure repellendus animi accusantium ex
                fugit deserunt dignissimos temporibus perferendis aliquam
                quaerat recusandae, omnis molestias labore officia sint pariatur
                cumque atque? Assumenda dolores excepturi accusantium accusamus
                porro? Soluta accusamus minus natus repellendus, accusantium
                quibusdam nostrum molestiae corrupti in voluptate, provident
                laboriosam, suscipit nihil. Iusto non dignissimos quod ab
                veritatis quaerat, sapiente facilis optio eligendi nemo
                consequuntur nostrum dolore architecto saepe, impedit dolores
                quis omnis repellendus similique, error delectus esse libero
                ratione. Tenetur, necessitatibus unde expedita nihil ad, dolorem
                facere cupiditate iusto voluptatem voluptatibus incidunt
                repellendus quos fugit, rem doloribus mollitia. Deleniti
                sapiente eum voluptas deserunt nemo necessitatibus dolorum
                labore aliquam nisi rem, architecto debitis possimus, veniam a
                facilis dolor quas, ad rerum pariatur? Aperiam deserunt soluta
                quo totam molestias, quis ducimus minus unde maiores
                voluptatibus deleniti dolore eos quas, doloremque, quia vero
                architecto iste officia nemo explicabo! Ullam eum ut blanditiis
                voluptatem rem reiciendis doloribus tempore eligendi iusto aut
                sequi sed laudantium placeat, quis officia id eos perspiciatis,
                quo fugiat saepe. Facilis dicta vitae nisi, autem amet modi
                aperiam maiores ipsa! Eligendi dicta corrupti expedita ab
                maiores quaerat sint blanditiis sed harum obcaecati impedit
                autem totam iusto, sequi nesciunt minima. Optio temporibus
                repellat magni inventore, aliquid odit rem qui aut expedita
                exercitationem reiciendis ipsum tempora voluptas fugit adipisci
                aspernatur. Architecto perspiciatis possimus animi aspernatur
                hic aperiam repellendus est officiis expedita voluptate tempora
                harum vitae consequatur alias voluptatum quis quos maiores,
                quisquam odit! Porro vel vero ullam dolores. Deleniti,
                consequuntur magnam ratione iure, repellendus atque molestiae
                harum consectetur ipsam sequi odio minus sit perferendis
                impedit. Sed, exercitationem? Dolor, ullam non voluptatibus
                voluptatem molestiae praesentium quae nemo maxime laboriosam.
                Eaque rem non reprehenderit deserunt nobis alias minima quos
                enim obcaecati, cum omnis similique fugiat? Quibusdam repellat
                iste adipisci veniam. Ipsam perferendis ratione numquam eum
                possimus rem et explicabo. Similique, at, quidem officiis
                delectus ea neque deleniti fugiat quasi alias in voluptate
                ratione, facere voluptatum praesentium illum modi necessitatibus
                sed architecto doloribus. Minus eligendi excepturi repudiandae
                quo, earum laboriosam porro assumenda commodi est perspiciatis
                deserunt. Maiores voluptatibus unde non nam nisi eveniet fuga
                voluptas rem impedit recusandae, molestias iusto consectetur eum
                iure officia nostrum laboriosam quae aliquam? Praesentium aut
                eaque officia, nostrum nobis delectus velit harum libero dolorem
                deserunt atque, iure culpa. Et maiores exercitationem officia
                consequuntur cumque quaerat fugiat corrupti illum velit itaque
                sequi error eligendi maxime placeat autem architecto minus
                optio, ab fugit accusantium laboriosam! Qui consequuntur
                deleniti quibusdam exercitationem at ab dolores omnis numquam
                cupiditate. Temporibus, error quos deserunt impedit quae harum
                soluta accusantium sapiente corrupti nesciunt ipsam, quisquam
                officia necessitatibus doloremque. Officiis cupiditate eos
                inventore maxime nobis harum repellendus mollitia, deserunt
                voluptas nostrum veniam repellat accusantium ipsum aspernatur.
                Amet, debitis magni saepe veritatis exercitationem blanditiis
                laudantium, nobis aliquam a voluptatibus facilis assumenda
                dolorem eum temporibus nihil, similique natus non ut omnis
                libero vel et cum. Ipsa similique in fugit error, deserunt,
                illum expedita tenetur inventore officiis quos eum suscipit?
                Adipisci rerum, doloribus eaque, enim quis voluptates modi
                voluptatibus debitis fugiat sit inventore praesentium ut dolorem
                consequatur eius hic mollitia laborum consectetur voluptatem
                reprehenderit asperiores? Aut delectus nisi animi voluptas
                veritatis minima quibusdam ullam nesciunt hic beatae itaque
                corporis aperiam, officia inventore nemo voluptatem commodi sit
                quo totam. Soluta obcaecati sint voluptatibus aspernatur placeat
                vel officia maiores accusantium fugit exercitationem mollitia
                non sit, consequuntur explicabo ducimus ipsam. Nihil eligendi
                repellat perspiciatis soluta iste, voluptatum pariatur numquam
                rerum necessitatibus autem? Nulla aspernatur dicta maiores
                repellat, quo ea aperiam laboriosam veritatis. Ipsum veritatis,
                sed odio explicabo, expedita cupiditate alias enim quas facilis
                at, sunt voluptatem voluptatum quasi nulla? Qui excepturi modi
                distinctio, amet labore voluptates minus accusantium omnis hic
                vero magnam eius, est, aliquam ullam exercitationem nam veniam
                recusandae molestias! Commodi rerum in sapiente recusandae nulla
                cumque officiis quae quas, beatae ut earum cupiditate laboriosam
                dolor voluptate veniam natus voluptas explicabo sequi voluptatem
                harum deserunt? Harum blanditiis quo repellendus minima officia
                eos sequi expedita deleniti eveniet sint incidunt ea sit
                suscipit vitae unde iusto reprehenderit accusantium voluptatem,
                dicta ad nulla delectus aliquam! Quisquam ex, officiis aliquid
                qui quia consequatur voluptates dolorum ipsum sed odit, eos
                similique quae. Assumenda dolorum sequi perferendis accusantium
                voluptatum? Beatae, ad unde odio autem non sequi. Reiciendis
                quam et dignissimos rerum nemo nihil consectetur vel soluta
                nesciunt earum ratione possimus, excepturi, nobis hic unde,
                laborum corrupti! Animi voluptatem in soluta rerum. Nam cumque,
                quod officia facere dignissimos libero. Suscipit expedita
                debitis repellat culpa veniam commodi fugiat magni laborum,
                officiis nulla eveniet hic quos labore, excepturi inventore!
                Ullam vero aliquam iusto deleniti est eaque cupiditate corporis
                eos cumque asperiores aut officiis explicabo, temporibus, itaque
                dolore voluptas cum? Laborum, quo deleniti nisi rerum similique
                veritatis? Incidunt enim quidem nobis odio totam exercitationem
                modi dolore, consequatur obcaecati omnis, numquam, accusamus
                aperiam itaque at impedit explicabo dolorum et ea! Nobis hic
                dolore reiciendis eum iusto! Perspiciatis at ratione nihil,
                soluta voluptatum ipsam, inventore temporibus ad praesentium
                rerum distinctio numquam eos molestiae harum reiciendis? Omnis
                ducimus vitae assumenda doloremque asperiores. Reiciendis
                mollitia autem ducimus, veniam illum nostrum soluta quisquam
                quia rem blanditiis unde minus aspernatur dicta quasi, nam non
                sequi id eveniet nulla ratione accusantium temporibus amet
                nihil! Reiciendis, exercitationem tempore impedit neque itaque
                voluptatem placeat, reprehenderit maiores iusto facere
                necessitatibus maxime minus veritatis porro sunt, temporibus
                praesentium harum nesciunt. Itaque mollitia consequatur fugit
                beatae ab soluta molestiae saepe, aperiam delectus vitae
                corporis odio voluptates veniam molestias ipsam eum assumenda
                minus quia cumque ut! Obcaecati voluptatibus, molestiae
                explicabo id aspernatur minus recusandae tempora vel quis qui
                fugit, dolorum vero laboriosam culpa dolores fuga ab consequatur
                ullam, nulla exercitationem harum labore quod accusantium. Velit
                quidem ut totam, laboriosam minus veritatis! Magnam consectetur
                veritatis hic debitis aperiam, provident minus? Quod, pariatur
                laboriosam. Dignissimos consequatur corporis et, repellendus
                corrupti nam in dolor quod ea sit quia, totam deleniti commodi
                quam. Vel, aperiam? Corporis sint quos maiores adipisci nemo.
                Rem iusto excepturi earum ullam rerum aut facere exercitationem
                tenetur! Accusantium eaque expedita, beatae hic vel laudantium
                reiciendis doloribus consequuntur aliquam vero deleniti ad,
                laborum nulla dolor perferendis amet at. Consequatur, fuga.
                Ducimus velit quidem iste corporis. Id labore iste veniam, odit
                aperiam cum. Similique nam sint architecto aperiam, earum enim
                unde. Nostrum eligendi dolores delectus. Facere quod aut
                accusantium dicta quisquam iste, ea aliquid minima perspiciatis
                a deleniti necessitatibus dolor sunt molestias laudantium?
                Pariatur cupiditate quaerat aspernatur. Commodi, quis, ut quae
                repellat, quibusdam recusandae accusamus odit magni voluptatem
                impedit explicabo voluptates ratione perspiciatis molestias
                molestiae nemo officia odio tempore eligendi optio inventore
                excepturi eos voluptatum? Molestias incidunt nemo tempore quam
                pariatur eum tenetur vero doloremque porro maiores. Dolorum
                voluptatibus atque consequuntur illo in architecto omnis
                doloremque id, minus dolorem saepe recusandae, tempore beatae
                nisi! Optio, perferendis excepturi officiis reprehenderit
                aliquam quisquam minima ipsa ipsum quam at nemo iure temporibus
                facilis, autem laudantium debitis! Explicabo, amet vitae! Animi
                quisquam sapiente excepturi, iusto impedit beatae neque quidem,
                libero est veniam quis accusamus cumque quaerat quibusdam, dolor
                ratione. Itaque tempore harum eligendi? Placeat ipsum maxime vel
                repudiandae illo consectetur eligendi dolorem repellat deleniti
                voluptatum et molestiae necessitatibus tenetur adipisci
                voluptates cumque architecto, similique, recusandae aliquid
                rerum explicabo. Adipisci nesciunt voluptates consequuntur,
                aliquid saepe delectus accusantium aut rem laborum cupiditate?
                Consequatur fugiat voluptatem provident blanditiis, sapiente
                dolore natus enim a saepe, nostrum libero? Nostrum, similique.
                Autem, magnam voluptate quas sunt rerum iusto quos veritatis
                doloribus eligendi ad quod inventore non voluptatem dolor
                accusantium ut beatae, distinctio necessitatibus consectetur,
                earum nemo quis! Eveniet repellat molestiae aut quo beatae
                reiciendis maxime est blanditiis quaerat, consequuntur, qui nemo
                itaque. Possimus, fugiat est fuga, vitae unde rerum repellendus
                hic necessitatibus velit, aperiam autem numquam at quasi beatae?
                Rerum beatae molestiae expedita aut cumque debitis, vitae ipsa?
                Dignissimos fugiat odit sequi explicabo quae officiis aliquam ut
                quos, aut consequatur laboriosam ducimus in. Similique quidem
                amet omnis nam iusto laborum distinctio molestias fuga eos,
                totam dolorum ipsam placeat sunt illo, voluptatum, itaque
                cupiditate! Odit saepe enim totam. Iure ut quis dolor illum sunt
                eius sequi sed non expedita error voluptates blanditiis nam
                deserunt minima maxime itaque adipisci dolore odit, repellendus
                tempore voluptatibus iusto cupiditate provident rerum?
                Cupiditate, similique animi! Assumenda tempora possimus, culpa
                perspiciatis perferendis accusamus nihil optio praesentium
                aliquam molestias. Voluptates, natus ut harum blanditiis
                laudantium at molestias illo velit quos dolor modi! Consectetur
                asperiores praesentium quaerat dolorem quisquam, aut corporis
                molestias esse ab assumenda quas ipsum exercitationem culpa
                repudiandae alias impedit eaque officia veniam dignissimos
                doloribus minus accusantium sunt? Animi assumenda reprehenderit
                quia accusamus facilis, rerum qui, id non cum veritatis iusto
                aut deleniti sint perspiciatis distinctio magnam quibusdam dicta
                ullam! Esse natus dolore corporis animi asperiores nesciunt
                commodi officia laudantium rem vel ad, nam libero eligendi?
                Architecto possimus nostrum ratione laudantium iure rem
                veritatis ullam, cumque mollitia adipisci expedita perferendis
                iste placeat repellat quasi ipsam! Perferendis nisi corporis
                quis ab quas asperiores iure debitis minima soluta voluptatem
                quod suscipit sequi sit, ullam omnis aut, earum consectetur
                blanditiis rem aliquid. Quam autem accusantium alias ad. Tempore
                provident voluptate odio harum nemo assumenda sed! Cum optio
                unde doloremque et at laudantium, omnis corporis ipsam officia,
                eveniet debitis beatae qui praesentium magnam rerum, non
                expedita dicta iste. Totam dicta laudantium molestiae architecto
                tenetur tempore mollitia, necessitatibus unde dignissimos
                corrupti nostrum perspiciatis debitis tempora aliquid beatae
                earum! Sint quae ducimus consectetur minus id eaque! Voluptates
                dolore cupiditate tenetur quis, magnam inventore praesentium
                distinctio minus iure amet. In rem odit, sunt natus veniam
                labore officiis blanditiis. Voluptatem dolorem cupiditate iure
                labore corrupti facilis aliquid non earum sunt numquam quo fuga,
                dolor possimus illum voluptates cum deserunt nisi, autem
                expedita nemo amet repellat ad voluptate quibusdam. Laborum hic
                dignissimos nihil debitis nesciunt id iste, et officiis deleniti
                explicabo ullam esse. Quam, aliquam voluptate veniam earum at
                optio velit magnam numquam odio fugit soluta sed asperiores!
                Tempora impedit, magnam nulla, ipsa quas nobis reiciendis, aut
                beatae labore sapiente quae expedita necessitatibus eaque ipsum
                mollitia officiis perspiciatis numquam nihil unde voluptate
                illum. Mollitia saepe fugiat similique molestiae, ipsum corrupti
                alias consequatur quibusdam in necessitatibus architecto commodi
                quidem soluta quasi omnis. Voluptates, reprehenderit repellendus
                placeat modi consectetur perferendis! Quidem quo aut excepturi
                dolorem dignissimos. Earum explicabo sint distinctio, ab
                dignissimos illo voluptas sed aut exercitationem quasi eligendi,
                harum aperiam. Consequatur repudiandae doloremque adipisci
                tenetur accusantium nulla iure, nisi quos eligendi dolorem
                impedit cupiditate possimus sit? Maiores ab saepe eligendi illum
                aspernatur quo? Accusamus sequi accusantium temporibus nihil eum
                hic, earum eligendi maiores ipsum nemo voluptas omnis at modi
                praesentium autem error laboriosam veritatis impedit quam
                expedita. Iusto tenetur obcaecati illo excepturi deserunt eaque
                suscipit impedit fuga veniam, maxime, consectetur incidunt
                aperiam dignissimos ipsa possimus quidem nihil? Explicabo
                dolorum quibusdam illo suscipit, maxime voluptatum, eos voluptas
                doloremque consequuntur reprehenderit temporibus tempore optio
                adipisci ab totam laborum earum repellat enim eligendi facere
                ipsa recusandae amet dolores dicta. Repudiandae tempore laborum
                provident vitae voluptates ad ducimus fugit voluptatem culpa
                iure delectus tenetur deserunt, libero illum dolorum porro,
                magnam sit placeat maiores rem assumenda deleniti. Dicta optio
                in asperiores quibusdam vel? Repudiandae harum temporibus
                repellendus fugiat illum sunt iste possimus quibusdam modi quia,
                rerum, perspiciatis numquam voluptatem voluptas, dolor
                architecto itaque reprehenderit sed ullam! Totam qui quas,
                perferendis vero tempore voluptas laboriosam, hic asperiores
                rerum modi suscipit voluptatum non alias atque, id ad neque.
                Tenetur, placeat accusantium quo exercitationem id reiciendis ab
                labore expedita asperiores similique enim unde dolorum,
                repudiandae eos! Provident quia culpa illo, a commodi quibusdam
                sunt dolores aspernatur blanditiis explicabo ducimus temporibus
                expedita sequi totam, ullam laudantium! Voluptatem, nostrum!
                Harum eaque dicta deserunt eligendi, iusto nam voluptate!
                Accusamus natus unde hic dolorem molestiae alias optio sunt
                doloremque dicta illo illum maxime, qui sed explicabo porro
                aperiam tempore, dolorum ea temporibus consequuntur obcaecati
                omnis amet eum cumque? Fuga, pariatur dicta mollitia minima
                necessitatibus molestias numquam, incidunt similique enim a
                veritatis optio corporis. Assumenda, cupiditate? Porro expedita
                nulla nisi at iure similique amet molestiae iusto doloribus
                culpa ullam vel, blanditiis officia dolorum debitis eveniet
                provident odit, quas exercitationem consectetur officiis? Neque
                dolores id porro animi officia reiciendis nostrum ratione totam,
                iure exercitationem suscipit iusto! Exercitationem minus non
                iure assumenda libero voluptas id, commodi rem blanditiis.
                Debitis ea optio adipisci temporibus magnam est explicabo
                praesentium labore at expedita ex sapiente, dolorum iste
                accusantium minima commodi provident, soluta aspernatur? Unde
                eius vero corporis, neque quaerat illo odit ea accusantium quia
                ullam nam consectetur ipsam sapiente aliquam reprehenderit?
                Corporis in tempore non? Numquam reprehenderit ducimus incidunt,
                inventore culpa magnam, odio molestias veniam, hic vel ipsum
                perspiciatis sit id cumque minima mollitia optio molestiae
                asperiores nisi maxime dolore minus. Animi fugiat, repellendus
                maxime soluta molestiae itaque, consectetur odio totam saepe
                nisi omnis? Quos nostrum officiis dolore ullam omnis quidem
                aliquid, ut, a alias, qui earum praesentium provident modi ipsa
                deleniti. Id temporibus quaerat nostrum quas impedit, repellat,
                aspernatur consequatur autem velit at dolorem error
                necessitatibus consectetur. Nesciunt, sequi! Optio, minus
                accusantium. Blanditiis sunt fuga harum dignissimos nesciunt
                dicta itaque quisquam iusto maiores ea dolorum perferendis
                temporibus, ut ipsa officiis reprehenderit magnam! Ratione ex
                mollitia iusto. Labore odit blanditiis libero minima odio illo
                obcaecati veniam cum minus dolor, quod culpa animi, iste nobis
                nostrum magni ea voluptates quos alias. Distinctio voluptatem
                modi sapiente expedita. Nihil, itaque! Provident atque quos,
                architecto hic ea a, tenetur sint, quisquam dolorem doloremque
                facilis vero. In aspernatur beatae sed quae eveniet. Quis qui
                aperiam minima soluta quia nostrum. Excepturi praesentium
                quibusdam molestiae, deserunt quam, eveniet voluptas minus
                tenetur suscipit impedit illo mollitia totam hic cupiditate non
                magnam dolorum cum ab placeat deleniti reiciendis perspiciatis
                iusto corporis dolor. Eligendi accusamus ullam ducimus rerum
                beatae expedita ipsam quam, amet fuga excepturi! Dolorem numquam
                dignissimos debitis accusamus tempore id illo obcaecati vel sit
                reiciendis inventore nostrum perspiciatis ratione commodi
                asperiores fugit fuga ut tenetur deleniti nobis dolore, aperiam
                iusto. Architecto, aspernatur esse eius laborum aliquid ab vitae
                amet quasi in rerum quam odit dicta necessitatibus. Similique,
                quo tempore? Eaque eligendi reiciendis ipsa cum, totam aliquam
                sapiente perspiciatis hic reprehenderit a. Cum doloremque optio
                magni natus, provident tenetur commodi sed possimus autem sint,
                libero molestiae dolorum laboriosam a maxime iure! Nobis beatae
                quod aspernatur debitis quo qui aliquam voluptas praesentium
                distinctio, quidem, inventore ratione. Libero magnam repudiandae
                sequi et repellat saepe, quod quaerat. Harum hic deleniti
                assumenda repudiandae cupiditate cum iusto qui earum aliquam
                cumque. Fugit maiores consequatur harum odit nulla asperiores
                quibusdam autem a? Aliquid obcaecati corporis nisi totam fuga
                ratione sed eius magnam. Recusandae odit veritatis, beatae optio
                libero voluptas? Animi accusamus modi numquam voluptatem
                blanditiis maxime maiores itaque recusandae, ea suscipit alias
                consectetur sapiente illo iure iusto fuga reprehenderit
                laudantium nam quisquam deserunt nisi. Neque corrupti illum eos
                sed aliquid cum accusamus doloribus porro dolore natus,
                molestias similique at tempore error dignissimos unde vel
                cupiditate? Animi quam ipsam voluptatibus, quod ab labore
                debitis incidunt, ad facere repellat vero aspernatur. A quaerat,
                dolore unde iste numquam alias necessitatibus rem assumenda
                itaque exercitationem nulla rerum, cum molestias quasi aperiam
                quam minus? Laboriosam quo asperiores ullam natus nostrum, magni
                ex eaque porro, iusto atque ipsa corrupti, iure a quae?
                Exercitationem quibusdam saepe sunt! Ipsam accusantium alias
                corporis eum asperiores quia modi? Quis, eaque debitis
                blanditiis iure voluptatibus incidunt magni laboriosam? Corporis
                necessitatibus cum totam eius quisquam minus enim deserunt
                voluptatibus doloremque nulla ullam, consequuntur iusto quod, at
                illo itaque, tempore repudiandae eos doloribus reprehenderit ex
                aspernatur laboriosam recusandae rerum. Nihil, accusantium!
                Numquam fugit dignissimos voluptas facilis odio maiores autem
                laudantium blanditiis, sapiente eius a ad ipsum rem harum
                accusamus officiis earum aut voluptate? Quae tempora veritatis
                delectus maiores nemo est laudantium a corrupti ex eaque odio et
                dignissimos officia soluta in, consequatur inventore cum
                suscipit sapiente modi iste? Cum suscipit a ipsa eligendi quo,
                cumque consectetur commodi, doloribus libero atque deleniti?
                Eveniet voluptatibus iste omnis atque ad voluptas hic numquam
                ratione cum consequatur? Rem aliquam quaerat vero tempora
                mollitia, dolor harum neque. Odit quaerat maxime beatae, eum
                vero, minus optio natus quisquam blanditiis porro culpa hic
                delectus suscipit neque est quam, doloribus quas fugit? Aut
                tempora nihil rem placeat vitae? Cum laboriosam quaerat
                perspiciatis, non consequatur doloremque veniam recusandae, quis
                assumenda, officiis obcaecati dolorem itaque facilis neque
                consequuntur earum! Aut, necessitatibus rerum maxime nisi
                placeat quaerat vero accusantium cum magnam quis ut. Similique
                amet architecto expedita eaque vero sint nesciunt, reprehenderit
                nisi quibusdam ad repudiandae at voluptate, excepturi temporibus
                alias aliquid maiores, deserunt ducimus omnis quas. Alias odit
                non molestiae repudiandae impedit eum eos laborum qui quasi?
                Magni illo asperiores sequi distinctio ab recusandae odit dolor
                fugiat, animi facere maxime quidem repellendus expedita nam cum
                adipisci. Corrupti facilis molestias error cupiditate expedita
                quasi esse adipisci doloremque blanditiis! Nesciunt quia
                doloribus id totam facere laborum aliquam quidem sint ducimus
                quis iusto dolorem veritatis, minima laudantium autem
                voluptatibus delectus tempore eligendi esse dolores illo, odit
                similique. Dolor officiis delectus repellendus sunt earum
                labore, inventore impedit placeat, deleniti dicta porro
                exercitationem maxime nemo aliquid nostrum molestias commodi
                ducimus amet similique expedita! Porro aut culpa consequuntur
                sint aliquam. Quam dignissimos nobis dolorum sunt repellat illum
                eaque soluta, cumque dolore quibusdam obcaecati consequuntur
                voluptas a possimus natus voluptatum illo nemo. Rem ullam,
                dignissimos nulla, distinctio corrupti magnam commodi, hic
                reiciendis velit sunt eos. Facere eveniet neque delectus odio
                velit veritatis doloribus temporibus, inventore saepe impedit
                recusandae itaque architecto placeat facilis unde quos.
                Accusamus aliquam, vitae eligendi quod fugit ipsa animi atque
                modi cumque veritatis enim cum unde provident! Impedit
                cupiditate nobis, sed asperiores iusto fugit assumenda incidunt
                reiciendis reprehenderit iure atque quisquam eos accusantium,
                modi in molestiae, quia rerum illum commodi quis voluptates?
                Quia obcaecati laudantium a impedit magni architecto libero
                laboriosam iusto distinctio corrupti rem perspiciatis temporibus
                quasi voluptatum quam provident inventore ab, eveniet officia
                tempore! Placeat exercitationem maxime sed, voluptatem itaque
                officia quae reprehenderit deleniti consectetur, dolores
                doloremque quaerat maiores laborum tenetur molestiae voluptas
                saepe, culpa tempore sunt soluta quia adipisci. Eligendi
                veritatis recusandae totam ducimus unde beatae voluptatibus
                quaerat, reiciendis sint impedit accusamus nisi officia! In
                iusto fugiat expedita, aperiam voluptate ad possimus repellendus
                quibusdam ipsa, fuga maiores, at rerum minus pariatur eligendi
                ex delectus! Commodi necessitatibus consectetur ut cum vitae
                ipsam placeat suscipit sapiente corrupti consequatur. Adipisci
                recusandae dolores, deleniti aliquid corrupti vero sapiente iure
                dolorem ipsa omnis sint, impedit reiciendis. Incidunt eum
                facilis itaque voluptatum, illum enim consequatur corporis ad
                veritatis expedita. Minima tenetur nemo similique repellat fugit
                exercitationem, commodi aut in accusamus! Itaque corporis
                delectus repudiandae accusamus iusto et. Qui aliquid deleniti
                atque enim nesciunt alias eveniet rem voluptatem eaque harum
                veritatis doloremque, vel dignissimos impedit nemo quis
                cupiditate adipisci pariatur aspernatur dolores assumenda
                quaerat illo velit! Consequatur vero alias maiores sint
                provident quisquam quis, est hic in! Saepe enim omnis minus
                ullam minima beatae reprehenderit porro nostrum, odit quidem
                velit natus numquam similique fuga quam repudiandae possimus!
                Culpa officia quas cumque quasi quam quae autem cum suscipit?
                Quo amet fugit quos, quia placeat esse nulla tenetur rem
                voluptatibus possimus quod eligendi voluptatem vel! Magni
                aperiam voluptatum laborum.
              </p>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </main>
  );
}
