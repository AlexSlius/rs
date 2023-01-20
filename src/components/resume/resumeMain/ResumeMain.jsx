import { CCol, CRow } from "@coreui/react"
import ReactStars from "react-rating-stars-component"
import { Fragment } from "react"
import { useSelector } from "react-redux"

import { formatDate } from "../../../utils"
import { domenServer } from "../../../constants/links"
import { isArray } from "lodash"

const ResumeMain = () => {
   const {
      contacts: {
         contactObj
      },
      employment: {
         employmentObj
      },
      educations: {
         educationObj
      },
      skills: {
         skillsObj
      },
      socials: {
         socialObj,
      },
      hobies: {
         hobiesObj,
      },
      interships: {
         interhipObj,
      },
      courses: {
         courseObj,
      },
      activitys: {
         activityObj,
      },
      languages: {
         languageObj,
      },
      references: {
         referencesObj,
      },
      certificaties: {
         certificatiesObj,
      },
   } = useSelector((state) => state);

   let notEmptyContactDetails = contactObj.address || contactObj.city?.name || contactObj.zipCode || contactObj.country?.name || contactObj.phone;
   let notEmptyContactDetailsAll = notEmptyContactDetails || contactObj.email;

   return (
      <div className="resume-main p-4">
         <CRow className="resume-main__row">
            <CCol className="resume-main__col1">
               <div className="resume-main__avatar-img">
                  <img src={contactObj?.picture || '/images/other/avatar-big.png'} />
               </div>
            </CCol>
            <CCol className="resume-main__col2">
               {
                  !!notEmptyContactDetailsAll && (
                     <div className="resume-main__head-info">
                        {contactObj.address && (` ${contactObj.address},`)} {contactObj.city?.name && (`${contactObj.city.name},`)} {contactObj.zipCode && (` ${contactObj.zipCode},`)} {contactObj.country?.name && (contactObj.country?.name)}
                        {contactObj?.phone && (` ${contactObj.phone}`)} {contactObj.email && (` ${notEmptyContactDetails && `-`} ${contactObj.email}`)}
                     </div>
                  )
               }
               <div className="resume-main__title">
                  {`${contactObj?.firstName || ''} ${contactObj?.lastName}`} - Here will be your profession.
               </div>
               <div className="resume-main__text">
                  <p>Here will be your description.</p>
               </div>
            </CCol>
         </CRow>

         {
            (isArray(employmentObj) && employmentObj?.length > 0) && !!employmentObj[0]?.title || employmentObj[0]?.company ? (
               <CRow className="resume-main__row">
                  <CCol className="resume-main__col1">
                     <div className="resume-main__label">
                        Employment</div>
                  </CCol>
                  <CCol className="resume-main__col2">
                     {employmentObj.map(el => {
                        return (
                           <Fragment key={el?.id}>
                              <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                                 <div className="resume-main__title2">{el?.title}</div>
                                 <div className="resume-main__head-text">
                                    {el?.company} {(el?.periodFrom?.date || el?.periodTo?.date) && `(${formatDate(el?.periodFrom?.date)} - ${formatDate(el?.periodTo?.date)})`}
                                 </div>
                              </div>
                              <div className="resume-main__bottom">
                                 <div className="resume-main__info-text" dangerouslySetInnerHTML={{ __html: el?.assignment }}></div>
                              </div>
                           </Fragment>
                        );
                     })}
                  </CCol>
               </CRow>
            ) : null
         }

         {
            (isArray(educationObj) && educationObj?.length > 0) ? (
               <CRow className="resume-main__row mb-4">
                  <CCol className="resume-main__col1">
                     <div className="resume-main__label">
                        Education</div>
                  </CCol>
                  <CCol className="resume-main__col2">
                     {
                        educationObj.map(el => (
                           <Fragment key={el?.id}>
                              <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                                 <div className="resume-main__title2">
                                    {el?.facility}
                                 </div>
                                 <div className="resume-main__head-text">
                                    {el?.study} {(el?.period_from || el?.period_to) && `(${formatDate(el?.period_from)} - ${formatDate(el?.period_to)})`}
                                 </div>
                              </div>
                              <div className="resume-main__bottom">
                                 <p className="resume-main__info-text">{el?.description}</p>
                              </div>
                           </Fragment>
                        ))
                     }
                  </CCol>
               </CRow>
            ) : null
         }

         {
            skillsObj?.skillsListAll.length ? (
               <CRow className="resume-main__row mb-4">
                  <CCol className="resume-main__col1">
                     <div className="resume-main__label">
                        Skills</div>
                  </CCol>
                  <CCol className="resume-main__col2">
                     <div className="d-flex flex-wrap justify-content-between align-items-center">
                        {
                           skillsObj.skillsListAll.map((el, ind, arr) => {
                              return (
                                 <Fragment key={el?.id}>
                                    <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-start align-items-center me-4">
                                       <div className="resume-main__head-text" style={{ fontWeight: 350 }}>
                                          {arr[ind]?.name}
                                       </div>
                                       <div className="resume-main__head-text">
                                          <ReactStars
                                             key={arr[ind]?.name + '-' + arr[ind]?.level}
                                             edit={false}
                                             count={5}
                                             value={arr[ind]?.level ? Number(arr[ind]?.level) : 0}
                                             size={12}
                                             activeColor={'#6DC26C'} />
                                       </div>
                                    </div>
                                 </Fragment>
                              );
                           })
                        }
                     </div>
                  </CCol>
               </CRow>
            ) : null
         }

         {
            socialObj?.length ? (<CRow className="resume-main__row mb-4">
               <CCol className="resume-main__col1">
                  <div className="resume-main__label">
                     Social Links</div>
               </CCol>
               <CCol className="resume-main__col2">
                  <CRow>
                     {
                        socialObj.map(el => (
                           <CCol key={el?.id} xs={6}>
                              <a href={el?.link} target="_blank" className="item-resum-soc" rel="noreferrer">
                                 {
                                    el?.icon && (
                                       <i style={{ backgroundImage: `url(${el?.icon})` }}></i>
                                    )
                                 }
                                 <span>{el?.link}</span>
                              </a>
                           </CCol>
                        ))
                     }
                  </CRow>
               </CCol>
            </CRow>) : null
         }

         {
            hobiesObj?.length ? (
               <CRow className="resume-main__row mb-4">
                  <CCol className="resume-main__col1">
                     <div className="resume-main__label">
                        Hobbies</div>
                  </CCol>
                  <CCol className="resume-main__col2">
                     <CRow>
                        {hobiesObj.map(el => (
                           <CCol key={el?.id} xs={6}>
                              <div className="resume-main__bottom">
                                 <p className="resume-main__info-text">{el?.text}</p>
                              </div>
                           </CCol>
                        ))}
                     </CRow>
                  </CCol>
               </CRow>
            ) : null
         }

         {
            isArray(activityObj) && activityObj?.length ? (
               <CRow className="resume-main__row mb-4">
                  <CCol className="resume-main__col1">
                     <div className="resume-main__label">
                        Extra-curricular activities</div>
                  </CCol>
                  <CCol className="resume-main__col2">
                     {
                        activityObj.map(el => (
                           <Fragment key={el?.id}>
                              <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                                 <div className="resume-main__title2">
                                    {el?.title}
                                 </div>
                                 <div className="resume-main__head-text">
                                    {el?.employer} {(el?.period_from || el?.period_to) && `(${formatDate(el?.period_from)} - ${formatDate(el?.period_to)})`}
                                 </div>
                              </div>
                              <div className="resume-main__bottom">
                                 <p className="resume-main__info-text">{el?.description}</p>
                              </div>
                           </Fragment>
                        ))
                     }
                  </CCol>
               </CRow>
            ) : null
         }

         {
            isArray(courseObj) && courseObj?.length ? (
               <CRow className="resume-main__row mb-4">
                  <CCol className="resume-main__col1">
                     <div className="resume-main__label">
                        Courses</div>
                  </CCol>
                  <CCol className="resume-main__col2">
                     {
                        courseObj.map(el => (
                           <Fragment key={el?.id}>
                              <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                                 <div className="resume-main__title2">
                                    {el?.title}
                                 </div>
                                 <div className="resume-main__head-text">
                                    {el?.institution} {(el?.period_from || el?.period_to) && `(${formatDate(el?.period_from)} - ${formatDate(el?.period_to)})`}
                                 </div>
                              </div>
                           </Fragment>
                        ))
                     }
                  </CCol>
               </CRow>
            ) : null
         }

         {
            isArray(interhipObj) && interhipObj?.length ? (<CRow className="resume-main__row mb-4">
               <CCol className="resume-main__col1">
                  <div className="resume-main__label">
                     Intership</div>
               </CCol>
               <CCol className="resume-main__col2">
                  {
                     interhipObj.map(el => (
                        <Fragment key={el?.id}>
                           <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                              <div className="resume-main__title2">
                                 {el?.job_title}
                              </div>
                              <div className="resume-main__head-text">
                                 {el?.employer} {(el?.period_from || el?.period_to) && `(${formatDate(el?.period_from)} - ${formatDate(el?.period_to)})`}
                              </div>
                           </div>
                           <div className="resume-main__bottom">
                              <p className="resume-main__info-text">{el?.description}</p>
                           </div>
                        </Fragment>
                     ))
                  }
               </CCol>
            </CRow>
            ) : null
         }

         {
            isArray(languageObj) && languageObj?.length ? (<CRow className="resume-main__row mb-4">
               <CCol className="resume-main__col1">
                  <div className="resume-main__label">
                     Languages</div>
               </CCol>
               <CCol className="resume-main__col2">
                  <CRow>
                     {
                        languageObj.map((el) => {
                           return (
                              <CCol xl={6}>
                                 <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-start align-items-center">
                                    <div className="resume-main__head-text" style={{ fontWeight: 350 }}>
                                       {el.language}
                                    </div>
                                    <div className="resume-main__head-text">
                                       <ReactStars
                                          key={el.language + '-' + el.level}
                                          count={6}
                                          value={el.level ? Number(el.level) : 0}
                                          size={12}
                                          edit={false}
                                          activeColor={'#6DC26C'} />
                                    </div>
                                 </div>
                              </CCol>
                           )
                        })
                     }
                  </CRow>
               </CCol>
            </CRow>
            ) : null
         }

         {
            isArray(referencesObj) && referencesObj?.length ? (
               <CRow className="resume-main__row mb-4">
                  <CCol className="resume-main__col1">
                     <div className="resume-main__label">
                        References</div>
                  </CCol>
                  <CCol className="resume-main__col2">
                     {referencesObj.map(el => (
                        <Fragment key={el?.id}>
                           <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-start align-items-center">
                              <div className="resume-main__title2">
                                 {el?.full_name}
                              </div>
                              <div className="resume-main__head-text">
                                 {el?.company}
                              </div>
                           </div>
                           <div className="resume-main__bottom">
                              <p className="resume-main__info-text">{el?.phone} - {el?.email}</p>
                           </div>
                        </Fragment>
                     ))}
                  </CCol>
               </CRow>
            ) : null
         }

         {
            isArray(certificatiesObj) && certificatiesObj?.length ? (
               <CRow className="resume-main__row mb-4">
                  <CCol className="resume-main__col1">
                     <div className="resume-main__label">
                        Certificates</div>
                  </CCol>
                  <CCol className="resume-main__col2">
                     {
                        certificatiesObj.map(el => (
                           <Fragment key={el?.id}>
                              {el?.name ? (<div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                                 <div className="resume-main__title2">
                                    {el?.name}
                                 </div>
                              </div>) : null}
                           </Fragment>
                        ))
                     }
                  </CCol>
               </CRow>
            ) : null
         }
      </div>
   )
}
export default ResumeMain;