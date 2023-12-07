import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { ChevronUp } from 'lucide-react'

const Collapsible = ({ title, children, isOpen, onToggle }) => {
  const toggleCollapsible = () => {
    onToggle(title)
  }

  return (
    <div
      style={{
        marginBottom: '10px',
        background: 'white',
        color: 'black',
        fontSize: '17px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
          cursor: 'pointer',
          backgroundColor: 'white',
        }}
        onClick={toggleCollapsible}
      >
        <span>{title}</span>
        <span style={{ fontWeight: 'bold' }}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </div>
      {isOpen && (
        <div style={{ padding: '10px', background: 'white' }}>
          {Array.isArray(children) ? children : <div>{children}</div>}
        </div>
      )}
    </div>
  )
}

const NestedCollapsible = ({ title, children, isOpen, onToggle }) => (
  <Collapsible title={title} isOpen={isOpen} onToggle={onToggle}>
    {children}
  </Collapsible>
)

const Accordion = () => {
  const [openCollapsibles, setOpenCollapsibles] = useState([])

  const handleToggle = (title) => {
    setOpenCollapsibles((prev) => {
      const parentTitle = title.split(' ')[0] // Extract parent title (e.g., 'Collapsible')

      if (prev.includes(title)) {
        // Close the current collapsible
        return prev.filter((t) => t !== title)
      } else {
        // Close other collapsibles at the same level
        const filtered = prev.filter((t) => !t.startsWith(parentTitle))
        return [...filtered, title]
      }
    })
  }

  return (
    <div>
      {/* tally erp9  */}
      <Collapsible
        title="Tally ERP 9"
        isOpen={openCollapsibles.includes('Tally ERP 9')}
        onToggle={handleToggle}
      >
        {/* function and features */}
        <NestedCollapsible
          title="Functions & Features"
          isOpen={openCollapsibles.includes('Functions & Features')}
          onToggle={handleToggle}
        >
          <a
            href="tally-erp9-software-on-rent.php"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Accounting
          </a>
          <a
            href="tally-erp9-software-on-rent.php"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Financial Management & Control
          </a>

          <NestedCollapsible
            title="Inventory"
            isOpen={openCollapsibles.includes('Inventory')}
            onToggle={handleToggle}
          >
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Inventory Accounting & Management
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Batch Voucher Report
            </a>
          </NestedCollapsible>

          <NestedCollapsible
            title="Purchases & Payables"
            isOpen={openCollapsibles.includes('Purchases & Payables')}
            onToggle={handleToggle}
          >
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Stock Query From Invoice
            </a>
          </NestedCollapsible>

          <NestedCollapsible
            title="Sales & Receivables"
            isOpen={openCollapsibles.includes('Sales & Receivables')}
            onToggle={handleToggle}
          >
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Stock From Invoice
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Mass Emailing - Communicating
            </a>
          </NestedCollapsible>

          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Point Of Sale
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Manufacturing
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Costing
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Job Costing
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Payroll
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Branch Management
          </a>

          <NestedCollapsible
            title="Data Synchronisation"
            isOpen={openCollapsibles.includes('Data Synchronisation')}
            onToggle={handleToggle}
          >
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              One Way Synchronisation
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Selective Synchronisation
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Synchronisation After Save
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multiple Rule Synchronisation
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Enterprise And Beyond
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Synch With Voucher Ordering
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Open Balance Control
            </a>
          </NestedCollapsible>

          <NestedCollapsible
            title="Statutory Compliance"
            isOpen={openCollapsibles.includes('Statutory Compliance')}
            onToggle={handleToggle}
          >
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              CST
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              VAT
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Service Tax
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              TDS
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Page Invoice Printing
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Excise For Dealers
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              TCS
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              FBT
            </a>
          </NestedCollapsible>

          <NestedCollapsible
            title="Special Needs"
            isOpen={openCollapsibles.includes('Special Needs')}
            onToggle={handleToggle}
          >
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Company
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Period
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Cost/Profit Center
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Currency
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Units
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Location Inventory
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Budgets & Scenarios
            </a>
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multilingual
            </a>
          </NestedCollapsible>

          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Security & Access Control
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Remote Access
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Remote Edit
          </a>
        </NestedCollapsible>

        {/* editions avaliable */}
        <NestedCollapsible
          title="Editions Available"
          isOpen={openCollapsibles.includes('Editions Available')}
          onToggle={handleToggle}
        >
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Silver Edition - Single User
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Gold Edition - Unlimited Multi-User
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Tally ERP 9 - Auditors Edition
          </a>
        </NestedCollapsible>

        {/* upgrades and migration */}
        <NestedCollapsible
          title="Upgrades & Migrations"
          isOpen={openCollapsibles.includes('Upgrades & Migrations')}
          onToggle={handleToggle}
        >
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Upgrades From Prior Versions
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Migrating From Other Products
          </a>
        </NestedCollapsible>

        {/* product roadmap */}
        <NestedCollapsible
          title="Product Roadmap"
          isOpen={openCollapsibles.includes('Product Roadmap')}
          onToggle={handleToggle}
        >
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Series A
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Series B
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Series C
          </a>
        </NestedCollapsible>
        <a
          href="#"
          className="custom-link"
          style={{
            display: 'block',
            marginBottom: '10px',
            marginLeft: '10px',
            color: 'black',
          }}
        >
          Price List
        </a>
      </Collapsible>

      {/* erp9 auditors edition */}
      <Collapsible
        title="Tally .ERP 9 - Auditor's Edition"
        isOpen={openCollapsibles.includes("Tally .ERP 9 - Auditor's Edition")}
        onToggle={handleToggle}
      >
        <a
          href="https://www.tallysolution.net/Benefits-at-a-glance-about-tally-erp9-Auditor-edition.php"
          className="custom-link"
          style={{
            display: 'block',
            marginBottom: '10px',
            marginLeft: '10px',
            color: 'black',
          }}
        >
          Benefits At A Glance
        </a>
        {/* statutory audit */}
        <NestedCollapsible
          title="Statutory Audit"
          isOpen={openCollapsibles.includes('Statutory Audit')}
          onToggle={handleToggle}
        >
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Data Analysis
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Auditing
          </a>
        </NestedCollapsible>
        {/* quick tax setup */}
        <NestedCollapsible
          title="Quick Tax Setup"
          isOpen={openCollapsibles.includes('Quick Tax Setup')}
          onToggle={handleToggle}
        >
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Schedule VI
          </a>
        </NestedCollapsible>
        <a
          href="https://www.tallysolution.net/Benefits-at-a-glance-about-tally-erp9-Auditor-edition.php"
          className="custom-link"
          style={{
            display: 'block',
            marginBottom: '10px',
            marginLeft: '10px',
            color: 'black',
          }}
        >
          Schedule A Demo
        </a>
      </Collapsible>

      {/* shoper 9 */}
      <Collapsible
        title="Tally Shopper 9"
        isOpen={openCollapsibles.includes('Tally Shopper 9')}
        onToggle={handleToggle}
      >
        {/* components */}
        <NestedCollapsible
          title="Components"
          isOpen={openCollapsibles.includes('Components')}
          onToggle={handleToggle}
        >
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Shopper 9 HO
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Shopper 9 POS/Distribution
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Shopper 9 - Product Edition
          </a>
        </NestedCollapsible>

        {/* functionality */}
        <NestedCollapsible
          title="Functionality"
          isOpen={openCollapsibles.includes('Functionality')}
          onToggle={handleToggle}
        >
          <NestedCollapsible
            title="Inventory Management"
            isOpen={openCollapsibles.includes('Inventory Management')}
            onToggle={handleToggle}
          >
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Stock Taking
            </a>
          </NestedCollapsible>
          <NestedCollapsible
            title="Catalogue Management"
            isOpen={openCollapsibles.includes('Catalogue Management')}
            onToggle={handleToggle}
          >
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Sales Promotions
            </a>
          </NestedCollapsible>
          <NestedCollapsible
            title="Configurability"
            isOpen={openCollapsibles.includes('Configurability')}
            onToggle={handleToggle}
          >
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Tally ERP 9 Interface
            </a>
          </NestedCollapsible>
          <NestedCollapsible
            title="Flow of Goods And Information"
            isOpen={openCollapsibles.includes('Flow of Goods And Information')}
            onToggle={handleToggle}
          >
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Comprehensive Data Synchronisation
            </a>
          </NestedCollapsible>
          <NestedCollapsible
            title="Management Reports"
            isOpen={openCollapsibles.includes('Management Reports')}
            onToggle={handleToggle}
          >
            <a
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Sales and Stock Reports
            </a>
          </NestedCollapsible>
        </NestedCollapsible>
        {/* technology */}
        <NestedCollapsible
          title="Technology"
          isOpen={openCollapsibles.includes('Technology')}
          onToggle={handleToggle}
        >
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Hardware
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Device Supported
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Architecture
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Customisation
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Interfaces
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Store Templates
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Custom Installer
          </a>
          <a
            href="#"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Live Update
          </a>
        </NestedCollapsible>
      </Collapsible>

      {/* tally developer */}
      <Collapsible
        title="Tally Developer"
        isOpen={openCollapsibles.includes('Tally Developer')}
        onToggle={handleToggle}
      >
        <a
          href="#"
          className="custom-link"
          style={{
            display: 'block',
            marginBottom: '10px',
            marginLeft: '10px',
            color: 'black',
          }}
        >
          Tally Development - TDL
        </a>
        <a
          href="#"
          className="custom-link"
          style={{
            display: 'block',
            marginBottom: '10px',
            marginLeft: '10px',
            color: 'black',
          }}
        >
          The Development Platform
        </a>
      </Collapsible>
      <a
        href="tally-erp9-software-on-rent.php"
        className="custom-link"
        style={{
          display: 'block',
          marginBottom: '15px',
          marginLeft: '10px',
          color: 'black',
          fontSize: '17px',
        }}
      >
        Tally ERP-9 Rental
      </a>
      <a
        href="tally-erp9-software-quotation.php"
        className="custom-link"
        style={{
          display: 'block',
          marginBottom: '10px',
          marginLeft: '10px',
          color: 'black',
          fontSize: '17px',
        }}
      >
        Our Quotation
      </a>
    </div>
  )
}

export default Accordion
