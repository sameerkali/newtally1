import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
const buyoffline = () => {
  return (
    <div>
      <Navbar />
      <section
        className="page-title parallaxie"
        data-bg-img="/images/08.jpg"
        style={{
          backgroundImage: 'url("/images/08.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 134.681px',
        }}
      >
        <div
          className="container"
          style={{
            width: '100%',
            height: '33vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '130px',
            textAlign: 'left',
          }}
        >
          <h1 style={{ zIndex: '2', marginBottom: '20px' }}>
            Glow IPS Service Authorized Tally Partner - Delhi
          </h1>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.php">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Glow IPS Tally ERP.9 Rental
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="pb-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-10">
              <div className="section-title">
                <h4 className="title">Buy Offline</h4>
                <div className="contact-main white-bg p-5 box-shadow">
                  <form
                    id=""
                    className="row"
                    method="post"
                    action="contactMail.php"
                  >
                    <div id="formmessage" />
                    <div className="col-md-6">
                      <input
                        type="radio"
                        id="html"
                        name="customer"
                        defaultValue="Existing"
                      />
                      &nbsp; <label htmlFor="html">Existing Customer</label>
                      <br />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="radio"
                        id="html"
                        name="customer"
                        defaultValue="New"
                      />
                      &nbsp; <label htmlFor="html">New Customer</label>
                      <br />
                    </div>
                    <div className="col-md-6">
                      <select
                        name="serial"
                        id=""
                        form="carform"
                        style={{ display: 'none' }}
                      >
                        <option value="">Serial number</option>
                      </select>
                      <div className="nice-select" tabIndex={0}>
                        <span className="current">Serial number</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            Serial number
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="input-side"
                          type="name"
                          name="serial_number"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Name*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="input-side"
                          type="name"
                          name="name"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Company Name*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="input-side"
                          type="text"
                          name="company_name"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Contact name*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="input-side"
                          type="text"
                          name="contact"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Email address*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="input-side"
                          type="text"
                          name="email"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Address*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="input-side"
                          type="text"
                          name="address"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Country*</p>
                    </div>
                    <div className="col-md-6">
                      <select
                        name="country"
                        className="buyofflinefrm"
                        id="country"
                        style={{ display: 'none' }}
                      >
                        <option value="INDIA">INDIA</option>
                        <option id="option" value="AFGHANISTAN">
                          AFGHANISTAN
                        </option>
                        <option value="LAND ISLANDS" style={{ width: 261 }}>
                          ÅLAND ISLANDS
                        </option>
                        <option value="ALBANIA">ALBANIA</option>
                        <option value="ALGERIA">ALGERIA</option>
                        <option value="AMERICAN SAMOA">AMERICAN SAMOA</option>
                        <option value="ANDORRA">ANDORRA</option>
                        <option value="ANGOLA">ANGOLA</option>
                        <option value="ANGUILLA">ANGUILLA</option>
                        <option value="ANTARCTICA">ANTARCTICA</option>
                        <option value="ANTIGUA">ANTIGUA AND BARBUDA</option>
                        <option value="ARGENTINA">ARGENTINA</option>
                        <option value="ARMENIA">ARMENIA</option>
                        <option value="ARUBA">ARUBA</option>
                        <option value="AUSTRALIA">AUSTRALIA</option>
                        <option value="AUSTRIA">AUSTRIA</option>
                        <option value="AZERBAIJAN">AZERBAIJAN</option>
                        <option value="BAHAMAS">BAHAMAS</option>
                        <option value="BAHRAIN">BAHRAIN</option>
                        <option value="BANGLADESH">BANGLADESH</option>
                        <option value="BARBADOS">BARBADOS</option>
                        <option value="BELARUS">BELARUS</option>
                        <option value="BELGIUM">BELGIUM</option>
                        <option value="BELIZE">BELIZE</option>
                        <option value="BENIN">BENIN</option>
                        <option value="BERMUDA">BERMUDA</option>
                        <option value="BHUTAN">BHUTAN</option>
                        <option value="BOLIVIA, PLURINATIONAL STATE OF">
                          BOLIVIA, PLURINATIONAL STATE OF
                        </option>
                        <option value="BONAIRE, SINT EUSTATIUS AND SABA">
                          BONAIRE, SINT EUSTATIUS AND SABA
                        </option>
                        <option value="BOSNIA AND HERZEGOVINA">
                          BOSNIA AND HERZEGOVINA
                        </option>
                        <option value="BOTSWANA">BOTSWANA</option>
                        <option value="BOUVET ISLAND">BOUVET ISLAND</option>
                        <option value="BRAZIL">BRAZIL</option>
                        <option value="BRITISH INDIAN OCEAN TERRITORY">
                          BRITISH INDIAN OCEAN TERRITORY
                        </option>
                        <option value="BRUNEI DARUSSALAM">
                          BRUNEI DARUSSALAM
                        </option>
                        <option value="BULGARIA">BULGARIA</option>
                        <option value="BURKINA FASO">BURKINA FASO</option>
                        <option value="BURUNDI">BURUNDI</option>
                        <option value="CAMBODIA">CAMBODIA</option>
                        <option value="CAMEROON">CAMEROON</option>
                        <option value="CANADA">CANADA</option>
                        <option value="CAPE VERDE">CAPE VERDE</option>
                        <option value="CAYMAN ISLANDS">CAYMAN ISLANDS</option>
                        <option value="CENTRAL AFRICAN REPUBLIC">
                          CENTRAL AFRICAN REPUBLIC
                        </option>
                        <option value="CHAD">CHAD</option>
                        <option value="CHILE">CHILE</option>
                        <option value="CHINA">CHINA</option>
                        <option value="CHRISTMAS ISLAND">
                          CHRISTMAS ISLAND
                        </option>
                        <option value="COCOS (KEELING) ISLANDS">
                          COCOS (KEELING) ISLANDS
                        </option>
                        <option value="COLOMBIA">COLOMBIA</option>
                        <option value="COMOROS">COMOROS</option>
                        <option value="CONGO1">CONGO</option>
                        <option value="CONGO">
                          CONGO, THE DEMOCRATIC REPUBLIC OF THE
                        </option>
                        <option value="COOK ISLANDS">COOK ISLANDS</option>
                        <option value="COSTA RICA">COSTA RICA</option>
                        <option value="IVOIRE">CÔTE D'IVOIRE</option>
                        <option value="CROATIA">CROATIA</option>
                        <option value="CUBA">CUBA</option>
                        <option value="CURA">CURAÇAO</option>
                        <option value="CYPRUS">CYPRUS</option>
                        <option value="CZECH REPUBLIC">CZECH REPUBLIC</option>
                        <option value="DENMARK">DENMARK</option>
                        <option value="DJIBOUTI">DJIBOUTI</option>
                        <option value="DOMINICA">DOMINICA</option>
                        <option value="DOMINICAN REPUBLIC">
                          DOMINICAN REPUBLIC
                        </option>
                        <option value="ECUADOR">ECUADOR</option>
                        <option value="EGYPT">EGYPT</option>
                        <option value="EL SALVADOR">EL SALVADOR</option>
                        <option value="EQUATORIAL GUINEA">
                          EQUATORIAL GUINEA
                        </option>
                        <option value="ERITREA">ERITREA</option>
                        <option value="ESTONIA">ESTONIA</option>
                        <option value="ETHIOPIA">ETHIOPIA</option>
                        <option value="FALKLAND">
                          FALKLAND ISLANDS (MALVINAS)
                        </option>
                        <option value="FAROE ISLANDS">FAROE ISLANDS</option>
                        <option value="FIJI">FIJI</option>
                        <option value="FINLAND">FINLAND</option>
                        <option value="FRANCE">FRANCE</option>
                        <option value="FRENCH GUIANA">FRENCH GUIANA</option>
                        <option value="FRENCH POLYNESIA">
                          FRENCH POLYNESIA
                        </option>
                        <option value="FRENCH SOUTHERN">
                          FRENCH SOUTHERN TERRITORIES
                        </option>
                        <option value="GABON">GABON</option>
                        <option value="GAMBIA">GAMBIA</option>
                        <option value="GEORGIA">GEORGIA</option>
                        <option value="GERMANY">GERMANY</option>
                        <option value="GHANA">GHANA</option>
                        <option value="GIBRALTAR">GIBRALTAR</option>
                        <option value="GREECE">GREECE</option>
                        <option value="GREENLAND">GREENLAND</option>
                        <option value="GRENADA">GRENADA</option>
                        <option value="GUADELOUPE">GUADELOUPE</option>
                        <option value="GUAM">GUAM</option>
                        <option value="GUATEMALA">GUATEMALA</option>
                        <option value="GUERNSEY">GUERNSEY</option>
                        <option value="GUINEA">GUINEA</option>
                        <option value="GUINEA-BISSAU">GUINEA-BISSAU</option>
                        <option value="GUYANA">GUYANA</option>
                        <option value="HAITI">HAITI</option>
                        <option value="HEARD ISLAND AND MCDONALD ISLANDS">
                          HEARD ISLAND AND MCDONALD ISLANDS
                        </option>
                        <option value="HOLY SEE (VATICAN CITY STATE)">
                          HOLY SEE (VATICAN CITY STATE)
                        </option>
                        <option value="HONDURAS">HONDURAS</option>
                        <option value="HONG KONG">HONG KONG</option>
                        <option value="HUNGARY">HUNGARY</option>
                        <option value="ICELAND">ICELAND</option>
                        <option value="INDONESIA">INDONESIA</option>
                        <option value="IRAN">IRAN, ISLAMIC REPUBLIC OF</option>
                        <option value="IRAQ">IRAQ</option>
                        <option value="IRELAND">IRELAND</option>
                        <option value="ISLE OF MAN">ISLE OF MAN</option>
                        <option value="ISRAEL">ISRAEL</option>
                        <option value="ITALY">ITALY</option>
                        <option value="JAMAICA">JAMAICA</option>
                        <option value="JAPAN">JAPAN</option>
                        <option value="JERSEY">JERSEY</option>
                        <option value="JORDAN">JORDAN</option>
                        <option value="KAZAKHSTAN">KAZAKHSTAN</option>
                        <option value="KENYA">KENYA</option>
                        <option value="KIRIBATI">KIRIBATI</option>
                        <option value="KOREA">
                          KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF
                        </option>
                        <option value="KOREA, REPUBLIC OF">
                          KOREA, REPUBLIC OF
                        </option>
                        <option value="KUWAIT">KUWAIT</option>
                        <option value="KYRGYZSTAN">KYRGYZSTAN</option>
                        <option value="LAO PEOPLE">
                          LAO PEOPLE'S DEMOCRATIC REPUBLIC
                        </option>
                        <option value="LATVIA">LATVIA</option>
                        <option value="LEBANON">LEBANON</option>
                        <option value="LESOTHO">LESOTHO</option>
                        <option value="LIBERIA">LIBERIA</option>
                        <option value="LIBYA">LIBYA</option>
                        <option value="LIECHTENSTEIN">LIECHTENSTEIN</option>
                        <option value="LITHUANIA">LITHUANIA</option>
                        <option value="LUXEMBOURG">LUXEMBOURG</option>
                        <option value="MACAO">MACAO</option>
                        <option value="MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF">
                          MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF
                        </option>
                        <option value="MADAGASCAR">MADAGASCAR</option>
                        <option value="MALAWI">MALAWI</option>
                        <option value="MALAYSIA">MALAYSIA</option>
                        <option value="MALDIVES">MALDIVES</option>
                        <option value="MALI">MALI</option>
                        <option value="MALTA">MALTA</option>
                        <option value="MARSHALL ISLANDS">
                          MARSHALL ISLANDS
                        </option>
                        <option value="MARTINIQUE">MARTINIQUE</option>
                        <option value="MAURITANIA">MAURITANIA</option>
                        <option value="MAURITIUS">MAURITIUS</option>
                        <option value="MAYOTTE">MAYOTTE</option>
                        <option value="MEXICO">MEXICO</option>
                        <option value="MICRONESIA, FEDERATED STATES OF">
                          MICRONESIA, FEDERATED STATES OF
                        </option>
                        <option value="MOLDOVA, REPUBLIC OF">
                          MOLDOVA, REPUBLIC OF
                        </option>
                        <option value="MONACO">MONACO</option>
                        <option value="MONGOLIA">MONGOLIA</option>
                        <option value="MONTENEGRO">MONTENEGRO</option>
                        <option value="MONTSERRAT">MONTSERRAT</option>
                        <option value="MOROCCO">MOROCCO</option>
                        <option value="MOZAMBIQUE">MOZAMBIQUE</option>
                        <option value="MYANMAR">MYANMAR</option>
                        <option value="NAMIBIA">NAMIBIA</option>
                        <option value="NAURU">NAURU</option>
                        <option value="NEPAL">NEPAL</option>
                        <option value="NETHERLANDS">NETHERLANDS</option>
                        <option value="NEW CALEDONIA">NEW CALEDONIA</option>
                        <option value="NEW ZEALAND">NEW ZEALAND</option>
                        <option value="NICARAGUA">NICARAGUA</option>
                        <option value="NIGER">NIGER</option>
                        <option value="NIGERIA">NIGERIA</option>
                        <option value="NIUE">NIUE</option>
                        <option value="NORFOLK ISLAND">NORFOLK ISLAND</option>
                        <option value="NORTHERN MARIANA ISLANDS">
                          NORTHERN MARIANA ISLANDS
                        </option>
                        <option value="NORWAY">NORWAY</option>
                        <option value="OMAN">OMAN</option>
                        <option value="PAKISTAN">PAKISTAN</option>
                        <option value="PALAU">PALAU</option>
                        <option value="PALESTINIAN TERRITORY, OCCUPIED">
                          PALESTINIAN TERRITORY, OCCUPIED
                        </option>
                        <option value="PANAMA">PANAMA</option>
                        <option value="PAPUA NEW GUINEA">
                          PAPUA NEW GUINEA
                        </option>
                        <option value="PARAGUAY">PARAGUAY</option>
                        <option value="PERU">PERU</option>
                        <option value="PHILIPPINES">PHILIPPINES</option>
                        <option value="PITCAIRN">PITCAIRN</option>
                        <option value="POLAND">POLAND</option>
                        <option value="PORTUGAL">PORTUGAL</option>
                        <option value="PUERTO RICO">PUERTO RICO</option>
                        <option value="QATAR">QATAR</option>
                        <option value="UNION">RÉUNION</option>
                        <option value="ROMANIA">ROMANIA</option>
                        <option value="RUSSIAN FEDERATION">
                          RUSSIAN FEDERATION
                        </option>
                        <option value="RWANDA">RWANDA</option>
                        <option value="SAINT BARTHÉLEMY">
                          SAINT BARTHÉLEMY
                        </option>
                        <option value="SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA">
                          SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA
                        </option>
                        <option value="SAINT KITTS AND NEVIS">
                          SAINT KITTS AND NEVIS
                        </option>
                        <option value="SAINT LUCIA">SAINT LUCIA</option>
                        <option value="SAINT MARTIN (FRENCH PART)">
                          SAINT MARTIN (FRENCH PART)
                        </option>
                        <option value="SAINT PIERRE AND MIQUELON">
                          SAINT PIERRE AND MIQUELON
                        </option>
                        <option value="SAINT VINCENT AND THE GRENADINES">
                          SAINT VINCENT AND THE GRENADINES
                        </option>
                        <option value="SAMOA">SAMOA</option>
                        <option value="SAN MARINO">SAN MARINO</option>
                        <option value="SAO TOME AND PRINCIPE">
                          SAO TOME AND PRINCIPE
                        </option>
                        <option value="SAUDI ARABIA">SAUDI ARABIA</option>
                        <option value="SENEGAL">SENEGAL</option>
                        <option value="SERBIA">SERBIA</option>
                        <option value="SEYCHELLES">SEYCHELLES</option>
                        <option value="SIERRA LEONE">SIERRA LEONE</option>
                        <option value="SINGAPORE">SINGAPORE</option>
                        <option value="SINT MAARTEN (DUTCH PART)">
                          SINT MAARTEN (DUTCH PART)
                        </option>
                        <option value="SLOVAKIA">SLOVAKIA</option>
                        <option value="SLOVENIA">SLOVENIA</option>
                        <option value="SOLOMON ISLANDS">SOLOMON ISLANDS</option>
                        <option value="SOMALIA">SOMALIA</option>
                        <option value="SOUTH AFRICA">SOUTH AFRICA</option>
                        <option value="SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS">
                          SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS
                        </option>
                        <option value="SOUTH SUDAN">SOUTH SUDAN</option>
                        <option value="SPAIN">SPAIN</option>
                        <option value="SRI LANKA">SRI LANKA</option>
                        <option value="SUDAN">SUDAN</option>
                        <option value="SURINAME">SURINAME</option>
                        <option value="SVALBARD AND JAN MAYEN">
                          SVALBARD AND JAN MAYEN
                        </option>
                        <option value="SWAZILAND">SWAZILAND</option>
                        <option value="SWEDEN">SWEDEN</option>
                        <option value="SWITZERLAND">SWITZERLAND</option>
                        <option value="SYRIAN ARAB REPUBLIC">
                          SYRIAN ARAB REPUBLIC
                        </option>
                        <option value="TAIWAN, PROVINCE OF CHINA">
                          TAIWAN, PROVINCE OF CHINA
                        </option>
                        <option value="TAJIKISTAN">TAJIKISTAN</option>
                        <option value="TANZANIA, UNITED REPUBLIC OF">
                          TANZANIA, UNITED REPUBLIC OF
                        </option>
                        <option value="THAILAND">THAILAND</option>
                        <option value="TIMOR-LESTE">TIMOR-LESTE</option>
                        <option value="TOGO">TOGO</option>
                        <option value="TOKELAU">TOKELAU</option>
                        <option value="TONGA">TONGA</option>
                        <option value="TRINIDAD AND TOBAGO">
                          TRINIDAD AND TOBAGO
                        </option>
                        <option value="TUNISIA">TUNISIA</option>
                        <option value="TURKEY">TURKEY</option>
                        <option value="TURKMENISTAN">TURKMENISTAN</option>
                        <option value="TURKS AND CAICOS ISLANDS">
                          TURKS AND CAICOS ISLANDS
                        </option>
                        <option value="TUVALU">TUVALU</option>
                        <option value="UGANDA">UGANDA</option>
                        <option value="UKRAINE">UKRAINE</option>
                        <option value="UNITED ARAB EMIRATES">
                          UNITED ARAB EMIRATES
                        </option>
                        <option value="UNITED KINGDOM">UNITED KINGDOM</option>
                        <option value="UNITED STATES">UNITED STATES</option>
                        <option value="UNITED STATES MINOR OUTLYING ISLANDS">
                          UNITED STATES MINOR OUTLYING ISLANDS
                        </option>
                        <option value="URUGUAY">URUGUAY</option>
                        <option value="UZBEKISTAN">UZBEKISTAN</option>
                        <option value="VANUATU">VANUATU</option>
                        <option value="VENEZUELA, BOLIVARIAN REPUBLIC OF">
                          VENEZUELA, BOLIVARIAN REPUBLIC OF
                        </option>
                        <option value="VIET NAM">VIET NAM</option>
                        <option value="VIRGIN ISLANDS, BRITISH">
                          VIRGIN ISLANDS, BRITISH
                        </option>
                        <option value="VIRGIN ISLANDS, U.S.">
                          VIRGIN ISLANDS, U.S.
                        </option>
                        <option value="WALLIS AND FUTUNA">
                          WALLIS AND FUTUNA
                        </option>
                        <option value="WESTERN SAHARA">WESTERN SAHARA</option>
                        <option value="YEMEN">YEMEN</option>
                        <option value="ZAMBIA">ZAMBIA</option>
                        <option value="ZIMBABWE">ZIMBABWE</option>
                      </select>
                      <div className="nice-select buyofflinefrm" tabIndex={0}>
                        <span className="current">INDIA</span>
                        <ul className="list">
                          <li data-value="INDIA" className="option selected">
                            INDIA
                          </li>
                          <li data-value="AFGHANISTAN" className="option">
                            AFGHANISTAN
                          </li>
                          <li data-value="LAND ISLANDS" className="option">
                            ÅLAND ISLANDS
                          </li>
                          <li data-value="ALBANIA" className="option">
                            ALBANIA
                          </li>
                          <li data-value="ALGERIA" className="option">
                            ALGERIA
                          </li>
                          <li data-value="AMERICAN SAMOA" className="option">
                            AMERICAN SAMOA
                          </li>
                          <li data-value="ANDORRA" className="option">
                            ANDORRA
                          </li>
                          <li data-value="ANGOLA" className="option">
                            ANGOLA
                          </li>
                          <li data-value="ANGUILLA" className="option">
                            ANGUILLA
                          </li>
                          <li data-value="ANTARCTICA" className="option">
                            ANTARCTICA
                          </li>
                          <li data-value="ANTIGUA" className="option">
                            ANTIGUA AND BARBUDA
                          </li>
                          <li data-value="ARGENTINA" className="option">
                            ARGENTINA
                          </li>
                          <li data-value="ARMENIA" className="option">
                            ARMENIA
                          </li>
                          <li data-value="ARUBA" className="option">
                            ARUBA
                          </li>
                          <li data-value="AUSTRALIA" className="option">
                            AUSTRALIA
                          </li>
                          <li data-value="AUSTRIA" className="option">
                            AUSTRIA
                          </li>
                          <li data-value="AZERBAIJAN" className="option">
                            AZERBAIJAN
                          </li>
                          <li data-value="BAHAMAS" className="option">
                            BAHAMAS
                          </li>
                          <li data-value="BAHRAIN" className="option">
                            BAHRAIN
                          </li>
                          <li data-value="BANGLADESH" className="option">
                            BANGLADESH
                          </li>
                          <li data-value="BARBADOS" className="option">
                            BARBADOS
                          </li>
                          <li data-value="BELARUS" className="option">
                            BELARUS
                          </li>
                          <li data-value="BELGIUM" className="option">
                            BELGIUM
                          </li>
                          <li data-value="BELIZE" className="option">
                            BELIZE
                          </li>
                          <li data-value="BENIN" className="option">
                            BENIN
                          </li>
                          <li data-value="BERMUDA" className="option">
                            BERMUDA
                          </li>
                          <li data-value="BHUTAN" className="option">
                            BHUTAN
                          </li>
                          <li
                            data-value="BOLIVIA, PLURINATIONAL STATE OF"
                            className="option"
                          >
                            BOLIVIA, PLURINATIONAL STATE OF
                          </li>
                          <li
                            data-value="BONAIRE, SINT EUSTATIUS AND SABA"
                            className="option"
                          >
                            BONAIRE, SINT EUSTATIUS AND SABA
                          </li>
                          <li
                            data-value="BOSNIA AND HERZEGOVINA"
                            className="option"
                          >
                            BOSNIA AND HERZEGOVINA
                          </li>
                          <li data-value="BOTSWANA" className="option">
                            BOTSWANA
                          </li>
                          <li data-value="BOUVET ISLAND" className="option">
                            BOUVET ISLAND
                          </li>
                          <li data-value="BRAZIL" className="option">
                            BRAZIL
                          </li>
                          <li
                            data-value="BRITISH INDIAN OCEAN TERRITORY"
                            className="option"
                          >
                            BRITISH INDIAN OCEAN TERRITORY
                          </li>
                          <li data-value="BRUNEI DARUSSALAM" className="option">
                            BRUNEI DARUSSALAM
                          </li>
                          <li data-value="BULGARIA" className="option">
                            BULGARIA
                          </li>
                          <li data-value="BURKINA FASO" className="option">
                            BURKINA FASO
                          </li>
                          <li data-value="BURUNDI" className="option">
                            BURUNDI
                          </li>
                          <li data-value="CAMBODIA" className="option">
                            CAMBODIA
                          </li>
                          <li data-value="CAMEROON" className="option">
                            CAMEROON
                          </li>
                          <li data-value="CANADA" className="option">
                            CANADA
                          </li>
                          <li data-value="CAPE VERDE" className="option">
                            CAPE VERDE
                          </li>
                          <li data-value="CAYMAN ISLANDS" className="option">
                            CAYMAN ISLANDS
                          </li>
                          <li
                            data-value="CENTRAL AFRICAN REPUBLIC"
                            className="option"
                          >
                            CENTRAL AFRICAN REPUBLIC
                          </li>
                          <li data-value="CHAD" className="option">
                            CHAD
                          </li>
                          <li data-value="CHILE" className="option">
                            CHILE
                          </li>
                          <li data-value="CHINA" className="option">
                            CHINA
                          </li>
                          <li data-value="CHRISTMAS ISLAND" className="option">
                            CHRISTMAS ISLAND
                          </li>
                          <li
                            data-value="COCOS (KEELING) ISLANDS"
                            className="option"
                          >
                            COCOS (KEELING) ISLANDS
                          </li>
                          <li data-value="COLOMBIA" className="option">
                            COLOMBIA
                          </li>
                          <li data-value="COMOROS" className="option">
                            COMOROS
                          </li>
                          <li data-value="CONGO1" className="option">
                            CONGO
                          </li>
                          <li data-value="CONGO" className="option">
                            CONGO, THE DEMOCRATIC REPUBLIC OF THE
                          </li>
                          <li data-value="COOK ISLANDS" className="option">
                            COOK ISLANDS
                          </li>
                          <li data-value="COSTA RICA" className="option">
                            COSTA RICA
                          </li>
                          <li data-value="IVOIRE" className="option">
                            CÔTE D'IVOIRE
                          </li>
                          <li data-value="CROATIA" className="option">
                            CROATIA
                          </li>
                          <li data-value="CUBA" className="option">
                            CUBA
                          </li>
                          <li data-value="CURA" className="option">
                            CURAÇAO
                          </li>
                          <li data-value="CYPRUS" className="option">
                            CYPRUS
                          </li>
                          <li data-value="CZECH REPUBLIC" className="option">
                            CZECH REPUBLIC
                          </li>
                          <li data-value="DENMARK" className="option">
                            DENMARK
                          </li>
                          <li data-value="DJIBOUTI" className="option">
                            DJIBOUTI
                          </li>
                          <li data-value="DOMINICA" className="option">
                            DOMINICA
                          </li>
                          <li
                            data-value="DOMINICAN REPUBLIC"
                            className="option"
                          >
                            DOMINICAN REPUBLIC
                          </li>
                          <li data-value="ECUADOR" className="option">
                            ECUADOR
                          </li>
                          <li data-value="EGYPT" className="option">
                            EGYPT
                          </li>
                          <li data-value="EL SALVADOR" className="option">
                            EL SALVADOR
                          </li>
                          <li data-value="EQUATORIAL GUINEA" className="option">
                            EQUATORIAL GUINEA
                          </li>
                          <li data-value="ERITREA" className="option">
                            ERITREA
                          </li>
                          <li data-value="ESTONIA" className="option">
                            ESTONIA
                          </li>
                          <li data-value="ETHIOPIA" className="option">
                            ETHIOPIA
                          </li>
                          <li data-value="FALKLAND" className="option">
                            FALKLAND ISLANDS (MALVINAS)
                          </li>
                          <li data-value="FAROE ISLANDS" className="option">
                            FAROE ISLANDS
                          </li>
                          <li data-value="FIJI" className="option">
                            FIJI
                          </li>
                          <li data-value="FINLAND" className="option">
                            FINLAND
                          </li>
                          <li data-value="FRANCE" className="option">
                            FRANCE
                          </li>
                          <li data-value="FRENCH GUIANA" className="option">
                            FRENCH GUIANA
                          </li>
                          <li data-value="FRENCH POLYNESIA" className="option">
                            FRENCH POLYNESIA
                          </li>
                          <li data-value="FRENCH SOUTHERN" className="option">
                            FRENCH SOUTHERN TERRITORIES
                          </li>
                          <li data-value="GABON" className="option">
                            GABON
                          </li>
                          <li data-value="GAMBIA" className="option">
                            GAMBIA
                          </li>
                          <li data-value="GEORGIA" className="option">
                            GEORGIA
                          </li>
                          <li data-value="GERMANY" className="option">
                            GERMANY
                          </li>
                          <li data-value="GHANA" className="option">
                            GHANA
                          </li>
                          <li data-value="GIBRALTAR" className="option">
                            GIBRALTAR
                          </li>
                          <li data-value="GREECE" className="option">
                            GREECE
                          </li>
                          <li data-value="GREENLAND" className="option">
                            GREENLAND
                          </li>
                          <li data-value="GRENADA" className="option">
                            GRENADA
                          </li>
                          <li data-value="GUADELOUPE" className="option">
                            GUADELOUPE
                          </li>
                          <li data-value="GUAM" className="option">
                            GUAM
                          </li>
                          <li data-value="GUATEMALA" className="option">
                            GUATEMALA
                          </li>
                          <li data-value="GUERNSEY" className="option">
                            GUERNSEY
                          </li>
                          <li data-value="GUINEA" className="option">
                            GUINEA
                          </li>
                          <li data-value="GUINEA-BISSAU" className="option">
                            GUINEA-BISSAU
                          </li>
                          <li data-value="GUYANA" className="option">
                            GUYANA
                          </li>
                          <li data-value="HAITI" className="option">
                            HAITI
                          </li>
                          <li
                            data-value="HEARD ISLAND AND MCDONALD ISLANDS"
                            className="option"
                          >
                            HEARD ISLAND AND MCDONALD ISLANDS
                          </li>
                          <li
                            data-value="HOLY SEE (VATICAN CITY STATE)"
                            className="option"
                          >
                            HOLY SEE (VATICAN CITY STATE)
                          </li>
                          <li data-value="HONDURAS" className="option">
                            HONDURAS
                          </li>
                          <li data-value="HONG KONG" className="option">
                            HONG KONG
                          </li>
                          <li data-value="HUNGARY" className="option">
                            HUNGARY
                          </li>
                          <li data-value="ICELAND" className="option">
                            ICELAND
                          </li>
                          <li data-value="INDONESIA" className="option">
                            INDONESIA
                          </li>
                          <li data-value="IRAN" className="option">
                            IRAN, ISLAMIC REPUBLIC OF
                          </li>
                          <li data-value="IRAQ" className="option">
                            IRAQ
                          </li>
                          <li data-value="IRELAND" className="option">
                            IRELAND
                          </li>
                          <li data-value="ISLE OF MAN" className="option">
                            ISLE OF MAN
                          </li>
                          <li data-value="ISRAEL" className="option">
                            ISRAEL
                          </li>
                          <li data-value="ITALY" className="option">
                            ITALY
                          </li>
                          <li data-value="JAMAICA" className="option">
                            JAMAICA
                          </li>
                          <li data-value="JAPAN" className="option">
                            JAPAN
                          </li>
                          <li data-value="JERSEY" className="option">
                            JERSEY
                          </li>
                          <li data-value="JORDAN" className="option">
                            JORDAN
                          </li>
                          <li data-value="KAZAKHSTAN" className="option">
                            KAZAKHSTAN
                          </li>
                          <li data-value="KENYA" className="option">
                            KENYA
                          </li>
                          <li data-value="KIRIBATI" className="option">
                            KIRIBATI
                          </li>
                          <li data-value="KOREA" className="option">
                            KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF
                          </li>
                          <li
                            data-value="KOREA, REPUBLIC OF"
                            className="option"
                          >
                            KOREA, REPUBLIC OF
                          </li>
                          <li data-value="KUWAIT" className="option">
                            KUWAIT
                          </li>
                          <li data-value="KYRGYZSTAN" className="option">
                            KYRGYZSTAN
                          </li>
                          <li data-value="LAO PEOPLE" className="option">
                            LAO PEOPLE'S DEMOCRATIC REPUBLIC
                          </li>
                          <li data-value="LATVIA" className="option">
                            LATVIA
                          </li>
                          <li data-value="LEBANON" className="option">
                            LEBANON
                          </li>
                          <li data-value="LESOTHO" className="option">
                            LESOTHO
                          </li>
                          <li data-value="LIBERIA" className="option">
                            LIBERIA
                          </li>
                          <li data-value="LIBYA" className="option">
                            LIBYA
                          </li>
                          <li data-value="LIECHTENSTEIN" className="option">
                            LIECHTENSTEIN
                          </li>
                          <li data-value="LITHUANIA" className="option">
                            LITHUANIA
                          </li>
                          <li data-value="LUXEMBOURG" className="option">
                            LUXEMBOURG
                          </li>
                          <li data-value="MACAO" className="option">
                            MACAO
                          </li>
                          <li
                            data-value="MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF"
                            className="option"
                          >
                            MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF
                          </li>
                          <li data-value="MADAGASCAR" className="option">
                            MADAGASCAR
                          </li>
                          <li data-value="MALAWI" className="option">
                            MALAWI
                          </li>
                          <li data-value="MALAYSIA" className="option">
                            MALAYSIA
                          </li>
                          <li data-value="MALDIVES" className="option">
                            MALDIVES
                          </li>
                          <li data-value="MALI" className="option">
                            MALI
                          </li>
                          <li data-value="MALTA" className="option">
                            MALTA
                          </li>
                          <li data-value="MARSHALL ISLANDS" className="option">
                            MARSHALL ISLANDS
                          </li>
                          <li data-value="MARTINIQUE" className="option">
                            MARTINIQUE
                          </li>
                          <li data-value="MAURITANIA" className="option">
                            MAURITANIA
                          </li>
                          <li data-value="MAURITIUS" className="option">
                            MAURITIUS
                          </li>
                          <li data-value="MAYOTTE" className="option">
                            MAYOTTE
                          </li>
                          <li data-value="MEXICO" className="option">
                            MEXICO
                          </li>
                          <li
                            data-value="MICRONESIA, FEDERATED STATES OF"
                            className="option"
                          >
                            MICRONESIA, FEDERATED STATES OF
                          </li>
                          <li
                            data-value="MOLDOVA, REPUBLIC OF"
                            className="option"
                          >
                            MOLDOVA, REPUBLIC OF
                          </li>
                          <li data-value="MONACO" className="option">
                            MONACO
                          </li>
                          <li data-value="MONGOLIA" className="option">
                            MONGOLIA
                          </li>
                          <li data-value="MONTENEGRO" className="option">
                            MONTENEGRO
                          </li>
                          <li data-value="MONTSERRAT" className="option">
                            MONTSERRAT
                          </li>
                          <li data-value="MOROCCO" className="option">
                            MOROCCO
                          </li>
                          <li data-value="MOZAMBIQUE" className="option">
                            MOZAMBIQUE
                          </li>
                          <li data-value="MYANMAR" className="option">
                            MYANMAR
                          </li>
                          <li data-value="NAMIBIA" className="option">
                            NAMIBIA
                          </li>
                          <li data-value="NAURU" className="option">
                            NAURU
                          </li>
                          <li data-value="NEPAL" className="option">
                            NEPAL
                          </li>
                          <li data-value="NETHERLANDS" className="option">
                            NETHERLANDS
                          </li>
                          <li data-value="NEW CALEDONIA" className="option">
                            NEW CALEDONIA
                          </li>
                          <li data-value="NEW ZEALAND" className="option">
                            NEW ZEALAND
                          </li>
                          <li data-value="NICARAGUA" className="option">
                            NICARAGUA
                          </li>
                          <li data-value="NIGER" className="option">
                            NIGER
                          </li>
                          <li data-value="NIGERIA" className="option">
                            NIGERIA
                          </li>
                          <li data-value="NIUE" className="option">
                            NIUE
                          </li>
                          <li data-value="NORFOLK ISLAND" className="option">
                            NORFOLK ISLAND
                          </li>
                          <li
                            data-value="NORTHERN MARIANA ISLANDS"
                            className="option"
                          >
                            NORTHERN MARIANA ISLANDS
                          </li>
                          <li data-value="NORWAY" className="option">
                            NORWAY
                          </li>
                          <li data-value="OMAN" className="option">
                            OMAN
                          </li>
                          <li data-value="PAKISTAN" className="option">
                            PAKISTAN
                          </li>
                          <li data-value="PALAU" className="option">
                            PALAU
                          </li>
                          <li
                            data-value="PALESTINIAN TERRITORY, OCCUPIED"
                            className="option"
                          >
                            PALESTINIAN TERRITORY, OCCUPIED
                          </li>
                          <li data-value="PANAMA" className="option">
                            PANAMA
                          </li>
                          <li data-value="PAPUA NEW GUINEA" className="option">
                            PAPUA NEW GUINEA
                          </li>
                          <li data-value="PARAGUAY" className="option">
                            PARAGUAY
                          </li>
                          <li data-value="PERU" className="option">
                            PERU
                          </li>
                          <li data-value="PHILIPPINES" className="option">
                            PHILIPPINES
                          </li>
                          <li data-value="PITCAIRN" className="option">
                            PITCAIRN
                          </li>
                          <li data-value="POLAND" className="option">
                            POLAND
                          </li>
                          <li data-value="PORTUGAL" className="option">
                            PORTUGAL
                          </li>
                          <li data-value="PUERTO RICO" className="option">
                            PUERTO RICO
                          </li>
                          <li data-value="QATAR" className="option">
                            QATAR
                          </li>
                          <li data-value="UNION" className="option">
                            RÉUNION
                          </li>
                          <li data-value="ROMANIA" className="option">
                            ROMANIA
                          </li>
                          <li
                            data-value="RUSSIAN FEDERATION"
                            className="option"
                          >
                            RUSSIAN FEDERATION
                          </li>
                          <li data-value="RWANDA" className="option">
                            RWANDA
                          </li>
                          <li data-value="SAINT BARTHÉLEMY" className="option">
                            SAINT BARTHÉLEMY
                          </li>
                          <li
                            data-value="SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA"
                            className="option"
                          >
                            SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA
                          </li>
                          <li
                            data-value="SAINT KITTS AND NEVIS"
                            className="option"
                          >
                            SAINT KITTS AND NEVIS
                          </li>
                          <li data-value="SAINT LUCIA" className="option">
                            SAINT LUCIA
                          </li>
                          <li
                            data-value="SAINT MARTIN (FRENCH PART)"
                            className="option"
                          >
                            SAINT MARTIN (FRENCH PART)
                          </li>
                          <li
                            data-value="SAINT PIERRE AND MIQUELON"
                            className="option"
                          >
                            SAINT PIERRE AND MIQUELON
                          </li>
                          <li
                            data-value="SAINT VINCENT AND THE GRENADINES"
                            className="option"
                          >
                            SAINT VINCENT AND THE GRENADINES
                          </li>
                          <li data-value="SAMOA" className="option">
                            SAMOA
                          </li>
                          <li data-value="SAN MARINO" className="option">
                            SAN MARINO
                          </li>
                          <li
                            data-value="SAO TOME AND PRINCIPE"
                            className="option"
                          >
                            SAO TOME AND PRINCIPE
                          </li>
                          <li data-value="SAUDI ARABIA" className="option">
                            SAUDI ARABIA
                          </li>
                          <li data-value="SENEGAL" className="option">
                            SENEGAL
                          </li>
                          <li data-value="SERBIA" className="option">
                            SERBIA
                          </li>
                          <li data-value="SEYCHELLES" className="option">
                            SEYCHELLES
                          </li>
                          <li data-value="SIERRA LEONE" className="option">
                            SIERRA LEONE
                          </li>
                          <li data-value="SINGAPORE" className="option">
                            SINGAPORE
                          </li>
                          <li
                            data-value="SINT MAARTEN (DUTCH PART)"
                            className="option"
                          >
                            SINT MAARTEN (DUTCH PART)
                          </li>
                          <li data-value="SLOVAKIA" className="option">
                            SLOVAKIA
                          </li>
                          <li data-value="SLOVENIA" className="option">
                            SLOVENIA
                          </li>
                          <li data-value="SOLOMON ISLANDS" className="option">
                            SOLOMON ISLANDS
                          </li>
                          <li data-value="SOMALIA" className="option">
                            SOMALIA
                          </li>
                          <li data-value="SOUTH AFRICA" className="option">
                            SOUTH AFRICA
                          </li>
                          <li
                            data-value="SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS"
                            className="option"
                          >
                            SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS
                          </li>
                          <li data-value="SOUTH SUDAN" className="option">
                            SOUTH SUDAN
                          </li>
                          <li data-value="SPAIN" className="option">
                            SPAIN
                          </li>
                          <li data-value="SRI LANKA" className="option">
                            SRI LANKA
                          </li>
                          <li data-value="SUDAN" className="option">
                            SUDAN
                          </li>
                          <li data-value="SURINAME" className="option">
                            SURINAME
                          </li>
                          <li
                            data-value="SVALBARD AND JAN MAYEN"
                            className="option"
                          >
                            SVALBARD AND JAN MAYEN
                          </li>
                          <li data-value="SWAZILAND" className="option">
                            SWAZILAND
                          </li>
                          <li data-value="SWEDEN" className="option">
                            SWEDEN
                          </li>
                          <li data-value="SWITZERLAND" className="option">
                            SWITZERLAND
                          </li>
                          <li
                            data-value="SYRIAN ARAB REPUBLIC"
                            className="option"
                          >
                            SYRIAN ARAB REPUBLIC
                          </li>
                          <li
                            data-value="TAIWAN, PROVINCE OF CHINA"
                            className="option"
                          >
                            TAIWAN, PROVINCE OF CHINA
                          </li>
                          <li data-value="TAJIKISTAN" className="option">
                            TAJIKISTAN
                          </li>
                          <li
                            data-value="TANZANIA, UNITED REPUBLIC OF"
                            className="option"
                          >
                            TANZANIA, UNITED REPUBLIC OF
                          </li>
                          <li data-value="THAILAND" className="option">
                            THAILAND
                          </li>
                          <li data-value="TIMOR-LESTE" className="option">
                            TIMOR-LESTE
                          </li>
                          <li data-value="TOGO" className="option">
                            TOGO
                          </li>
                          <li data-value="TOKELAU" className="option">
                            TOKELAU
                          </li>
                          <li data-value="TONGA" className="option">
                            TONGA
                          </li>
                          <li
                            data-value="TRINIDAD AND TOBAGO"
                            className="option"
                          >
                            TRINIDAD AND TOBAGO
                          </li>
                          <li data-value="TUNISIA" className="option">
                            TUNISIA
                          </li>
                          <li data-value="TURKEY" className="option">
                            TURKEY
                          </li>
                          <li data-value="TURKMENISTAN" className="option">
                            TURKMENISTAN
                          </li>
                          <li
                            data-value="TURKS AND CAICOS ISLANDS"
                            className="option"
                          >
                            TURKS AND CAICOS ISLANDS
                          </li>
                          <li data-value="TUVALU" className="option">
                            TUVALU
                          </li>
                          <li data-value="UGANDA" className="option">
                            UGANDA
                          </li>
                          <li data-value="UKRAINE" className="option">
                            UKRAINE
                          </li>
                          <li
                            data-value="UNITED ARAB EMIRATES"
                            className="option"
                          >
                            UNITED ARAB EMIRATES
                          </li>
                          <li data-value="UNITED KINGDOM" className="option">
                            UNITED KINGDOM
                          </li>
                          <li data-value="UNITED STATES" className="option">
                            UNITED STATES
                          </li>
                          <li
                            data-value="UNITED STATES MINOR OUTLYING ISLANDS"
                            className="option"
                          >
                            UNITED STATES MINOR OUTLYING ISLANDS
                          </li>
                          <li data-value="URUGUAY" className="option">
                            URUGUAY
                          </li>
                          <li data-value="UZBEKISTAN" className="option">
                            UZBEKISTAN
                          </li>
                          <li data-value="VANUATU" className="option">
                            VANUATU
                          </li>
                          <li
                            data-value="VENEZUELA, BOLIVARIAN REPUBLIC OF"
                            className="option"
                          >
                            VENEZUELA, BOLIVARIAN REPUBLIC OF
                          </li>
                          <li data-value="VIET NAM" className="option">
                            VIET NAM
                          </li>
                          <li
                            data-value="VIRGIN ISLANDS, BRITISH"
                            className="option"
                          >
                            VIRGIN ISLANDS, BRITISH
                          </li>
                          <li
                            data-value="VIRGIN ISLANDS, U.S."
                            className="option"
                          >
                            VIRGIN ISLANDS, U.S.
                          </li>
                          <li data-value="WALLIS AND FUTUNA" className="option">
                            WALLIS AND FUTUNA
                          </li>
                          <li data-value="WESTERN SAHARA" className="option">
                            WESTERN SAHARA
                          </li>
                          <li data-value="YEMEN" className="option">
                            YEMEN
                          </li>
                          <li data-value="ZAMBIA" className="option">
                            ZAMBIA
                          </li>
                          <li data-value="ZIMBABWE" className="option">
                            ZIMBABWE
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>State*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="input-side"
                          type="text"
                          name="state"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>City*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="input-side"
                          type="text"
                          name="city"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>postal Code*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="input-side"
                          type="text"
                          name="postal code"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                          maxLength={6}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Products*</p>
                    </div>
                    <div className="col-md-6">
                      <select
                        name="product"
                        id=""
                        form="carform"
                        style={{ display: 'none' }}
                      >
                        <option value="">Plese select....</option>
                        <option value="Tally.ERP 9 (Single User)">
                          Tally.ERP 9 (Single User)
                        </option>
                        <option value="Tally.ERP 9 (Multi User)">
                          Tally.ERP 9 (Multi User)
                        </option>
                        <option value="Upgrade to Tally.ERP 9">
                          Upgrade to Tally.ERP 9
                        </option>
                        <option value="Tally.ERP 9 - Auditors' Edition">
                          Tally.ERP 9 - Auditors' Edition
                        </option>
                        <option value="Tally 7.2 Silver to Tally.ERP 9 Silver">
                          Tally 7.2 Silver to Tally.ERP 9 Silver
                        </option>
                        <option value="Tally 7.2 Gold to Tally.ERP 9 Gold">
                          Tally 7.2 Gold to Tally.ERP 9 Gold
                        </option>
                        <option value="Tally 6.3 Silver to Tally.ERP 9 Silver">
                          Tally 6.3 Silver to Tally.ERP 9 Silver
                        </option>
                        <option value="Tally 6.3 Gold to Tally.ERP 9 Gold">
                          Tally 6.3 Gold to Tally.ERP 9 Gold
                        </option>
                        <option value="Tally.ERP 9 Silver To Tally.ERP 9 Gold">
                          Tally.ERP 9 Silver To Tally.ERP 9 Gold
                        </option>
                      </select>
                      <div className="nice-select" tabIndex={0}>
                        <span className="current">Plese select....</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            Plese select....
                          </li>
                          <li
                            data-value="Tally.ERP 9 (Single User)"
                            className="option"
                          >
                            Tally.ERP 9 (Single User)
                          </li>
                          <li
                            data-value="Tally.ERP 9 (Multi User)"
                            className="option"
                          >
                            Tally.ERP 9 (Multi User)
                          </li>
                          <li
                            data-value="Upgrade to Tally.ERP 9"
                            className="option"
                          >
                            Upgrade to Tally.ERP 9
                          </li>
                          <li
                            data-value="Tally.ERP 9 - Auditors' Edition"
                            className="option"
                          >
                            Tally.ERP 9 - Auditors' Edition
                          </li>
                          <li
                            data-value="Tally 7.2 Silver to Tally.ERP 9 Silver"
                            className="option"
                          >
                            Tally 7.2 Silver to Tally.ERP 9 Silver
                          </li>
                          <li
                            data-value="Tally 7.2 Gold to Tally.ERP 9 Gold"
                            className="option"
                          >
                            Tally 7.2 Gold to Tally.ERP 9 Gold
                          </li>
                          <li
                            data-value="Tally 6.3 Silver to Tally.ERP 9 Silver"
                            className="option"
                          >
                            Tally 6.3 Silver to Tally.ERP 9 Silver
                          </li>
                          <li
                            data-value="Tally 6.3 Gold to Tally.ERP 9 Gold"
                            className="option"
                          >
                            Tally 6.3 Gold to Tally.ERP 9 Gold
                          </li>
                          <li
                            data-value="Tally.ERP 9 Silver To Tally.ERP 9 Gold"
                            className="option"
                          >
                            Tally.ERP 9 Silver To Tally.ERP 9 Gold
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Payment Optoins*</p>
                    </div>
                    <div className="col-md-6">
                      <select
                        name="payment_option"
                        id=""
                        form="carform"
                        style={{ display: 'none' }}
                      >
                        <option value="">plese selected</option>
                        <option value="product">cash</option>
                        <option value="product">cradit</option>
                        <option value="product">UPI</option>
                        <option value="product">Etc</option>
                      </select>
                      <div className="nice-select" tabIndex={0}>
                        <span className="current">plese selected</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            plese selected
                          </li>
                          <li data-value="product" className="option">
                            cash
                          </li>
                          <li data-value="product" className="option">
                            cradit
                          </li>
                          <li data-value="product" className="option">
                            UPI
                          </li>
                          <li data-value="product" className="option">
                            Etc
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>
                        Any specific requirement related to Services or
                        Solution?
                      </p>
                    </div>
                    <div className="col-md-6">
                      <textarea
                        id="w3review"
                        name="w3review"
                        rows={4}
                        cols={50}
                        className="w-100"
                        defaultValue={' '}
                      />
                    </div>
                    <div className="col-md-12 text-center mt-4">
                      <button className="btn">
                        <span>Send Messages</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default buyoffline