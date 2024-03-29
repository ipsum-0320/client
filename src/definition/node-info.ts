interface INodeInfoPlus {
  [nodeName: string]: {
    ip: string,
    cpu: string,
    mem: string,
    os: string,
    role: string,
    k8sVersion: string,
    dockerVersion: string,
    business: string,
  }
}

const nodeInfoPlus: INodeInfoPlus = {
  master: {
    ip: "47.113.144.248",
    cpu: "2 核",
    mem: "2 G",
    os: "CentOS Linux release 7.9.2009 (Core)",
    role: "root",
    k8sVersion: "v1.23.6",
    dockerVersion: "v20.10.14",
    business: "阿里云",
  },
  node00: {
    ip: "39.96.212.224",
    cpu: "16 核",
    mem: "62 G",
    os: "Alibaba Cloud Linux release 3 (Soaring Falcon)",
    role: "root",
    k8sVersion: "v1.23.6",
    dockerVersion: "v23.0.1",
    business: "阿里云",
  },
  node01: {
    ip: "47.115.215.127",
    cpu: "2 核",
    mem: "2 G",
    os: "CentOS Linux release 7.9.2009 (Core)",
    role: "root",
    k8sVersion: "v1.23.6",
    dockerVersion: "v20.10.14",
    business: "阿里云",
  },
  node02: {
    ip: "43.136.115.216",
    cpu: "2 核",
    mem: "2 G",
    os: "CentOS Linux release 7.9.2009 (Core)",
    role: "root",
    k8sVersion: "v1.23.6",
    dockerVersion: "v20.10.14",
    business: "腾讯云",
  },
  node03: {
    ip: "47.120.14.60",
    cpu: "2 核",
    mem: "2 G",
    os: "CentOS Linux release 7.9.2009 (Core)",
    role: "root",
    k8sVersion: "v1.23.6",
    dockerVersion: "v20.10.14",
    business: "阿里云",
  },
  node04: {
    ip: "47.113.201.179",
    cpu: "2 核",
    mem: "2 G",
    os: "CentOS Linux release 7.9.2009 (Core)",
    role: "root",
    k8sVersion: "v1.23.6",
    dockerVersion: "v20.10.14",
    business: "阿里云",
  },
  node05: {
    ip: "47.120.8.61",
    cpu: "2 核",
    mem: "2 G",
    os: "CentOS Linux release 7.9.2009 (Core)",
    role: "root",
    k8sVersion: "v1.23.6",
    dockerVersion: "v20.10.14",
    business: "阿里云",
  },
}

export default nodeInfoPlus;