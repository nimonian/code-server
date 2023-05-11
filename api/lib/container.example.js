const container = {
  Id: 'e693395148c0b129e8edd7d213bb7291fe3ecce866fbc125a252d5521a5e92d1',
  Created: '2023-05-08T20:17:39.472594458Z',
  Path: 'code-server',
  Args: ['--host', '0.0.0.0'],
  State: {
    Status: 'running',
    Running: true,
    Paused: false,
    Restarting: false,
    OOMKilled: false,
    Dead: false,
    Pid: 31157,
    ExitCode: 0,
    Error: '',
    StartedAt: '2023-05-08T20:17:39.87571828Z',
    FinishedAt: '0001-01-01T00:00:00Z'
  },
  Image:
    'sha256:10532c1076051ee8e1cf5a51b7262b5c97e072b319739ff75e550f9f4560c7e3',
  ResolvConfPath:
    '/var/lib/docker/containers/e693395148c0b129e8edd7d213bb7291fe3ecce866fbc125a252d5521a5e92d1/resolv.conf',
  HostnamePath:
    '/var/lib/docker/containers/e693395148c0b129e8edd7d213bb7291fe3ecce866fbc125a252d5521a5e92d1/hostname',
  HostsPath:
    '/var/lib/docker/containers/e693395148c0b129e8edd7d213bb7291fe3ecce866fbc125a252d5521a5e92d1/hosts',
  LogPath:
    '/var/lib/docker/containers/e693395148c0b129e8edd7d213bb7291fe3ecce866fbc125a252d5521a5e92d1/e693395148c0b129e8edd7d213bb7291fe3ecce866fbc125a252d5521a5e92d1-json.log',
  Name: '/neo-sandbox',
  RestartCount: 0,
  Driver: 'overlay2',
  Platform: 'linux',
  MountLabel: '',
  ProcessLabel: '',
  AppArmorProfile: 'docker-default',
  ExecIDs: null,
  HostConfig: {
    Binds: null,
    ContainerIDFile: '',
    LogConfig: { Type: 'json-file', Config: {} },
    NetworkMode: 'default',
    PortBindings: { '8080/tcp': [Array] },
    RestartPolicy: { Name: 'no', MaximumRetryCount: 0 },
    AutoRemove: false,
    VolumeDriver: '',
    VolumesFrom: null,
    ConsoleSize: [0, 0],
    CapAdd: null,
    CapDrop: null,
    CgroupnsMode: 'private',
    Dns: [],
    DnsOptions: [],
    DnsSearch: [],
    ExtraHosts: null,
    GroupAdd: null,
    IpcMode: 'private',
    Cgroup: '',
    Links: null,
    OomScoreAdj: 0,
    PidMode: '',
    Privileged: false,
    PublishAllPorts: false,
    ReadonlyRootfs: false,
    SecurityOpt: null,
    UTSMode: '',
    UsernsMode: '',
    ShmSize: 67108864,
    Runtime: 'runc',
    Isolation: '',
    CpuShares: 0,
    Memory: 1073741824,
    NanoCpus: 1000000000,
    CgroupParent: '',
    BlkioWeight: 0,
    BlkioWeightDevice: [],
    BlkioDeviceReadBps: [],
    BlkioDeviceWriteBps: [],
    BlkioDeviceReadIOps: [],
    BlkioDeviceWriteIOps: [],
    CpuPeriod: 0,
    CpuQuota: 0,
    CpuRealtimePeriod: 0,
    CpuRealtimeRuntime: 0,
    CpusetCpus: '',
    CpusetMems: '',
    Devices: [],
    DeviceCgroupRules: null,
    DeviceRequests: null,
    MemoryReservation: 0,
    MemorySwap: 2147483648,
    MemorySwappiness: null,
    OomKillDisable: null,
    PidsLimit: null,
    Ulimits: null,
    CpuCount: 0,
    CpuPercent: 0,
    IOMaximumIOps: 0,
    IOMaximumBandwidth: 0,
    MaskedPaths: [
      '/proc/asound',
      '/proc/acpi',
      '/proc/kcore',
      '/proc/keys',
      '/proc/latency_stats',
      '/proc/timer_list',
      '/proc/timer_stats',
      '/proc/sched_debug',
      '/proc/scsi',
      '/sys/firmware'
    ],
    ReadonlyPaths: [
      '/proc/bus',
      '/proc/fs',
      '/proc/irq',
      '/proc/sys',
      '/proc/sysrq-trigger'
    ]
  },
  GraphDriver: {
    Data: {
      LowerDir:
        '/var/lib/docker/overlay2/c31818f620678577d264051fb81de880475cf8dfda76851f3af91bcf8b4c9317-init/diff:/var/lib/docker/overlay2/tgv1wx39392hrvyrfntnm5nq7/diff:/var/lib/docker/overlay2/zj31bhhcdvvse8vma78fyhmre/diff:/var/lib/docker/overlay2/yoj216ancq594ru0k6fy1v10o/diff:/var/lib/docker/overlay2/eaootsdau276yu0loofru53u3/diff:/var/lib/docker/overlay2/cb0b7a1e8abe4ba231e105a589622f630f29176ee3d8ffdf1c532058d9b9bda0/diff',
      MergedDir:
        '/var/lib/docker/overlay2/c31818f620678577d264051fb81de880475cf8dfda76851f3af91bcf8b4c9317/merged',
      UpperDir:
        '/var/lib/docker/overlay2/c31818f620678577d264051fb81de880475cf8dfda76851f3af91bcf8b4c9317/diff',
      WorkDir:
        '/var/lib/docker/overlay2/c31818f620678577d264051fb81de880475cf8dfda76851f3af91bcf8b4c9317/work'
    },
    Name: 'overlay2'
  },
  Mounts: [],
  Config: {
    Hostname: 'neo',
    Domainname: '',
    User: '',
    AttachStdin: false,
    AttachStdout: false,
    AttachStderr: false,
    ExposedPorts: { '8080/tcp': {} },
    Tty: false,
    OpenStdin: false,
    StdinOnce: false,
    Env: ['PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin'],
    Cmd: null,
    Image: 'mv-code-server',
    Volumes: null,
    WorkingDir: '',
    Entrypoint: ['code-server', '--host', '0.0.0.0'],
    OnBuild: null,
    Labels: {
      'org.opencontainers.image.ref.name': 'ubuntu',
      'org.opencontainers.image.version': '22.04'
    }
  },
  NetworkSettings: {
    Bridge: '',
    SandboxID:
      'b7699428ce3e68f9cacb5ba528c90d95d9266214144e9cc3fef2930b18259293',
    HairpinMode: false,
    LinkLocalIPv6Address: '',
    LinkLocalIPv6PrefixLen: 0,
    Ports: {
      '8080/tcp': [
        {
          HostIp: '0.0.0.0',
          HostPort: '8001'
        },
        {
          HostIp: '::',
          HostPort: '8001'
        }
      ]
    },
    SandboxKey: '/var/run/docker/netns/b7699428ce3e',
    SecondaryIPAddresses: null,
    SecondaryIPv6Addresses: null,
    EndpointID:
      'f898774abe0266d9c6d5aadfbd7445b6c281623fb34bc38a2050089a9c7cc452',
    Gateway: '172.17.0.1',
    GlobalIPv6Address: '',
    GlobalIPv6PrefixLen: 0,
    IPAddress: '172.17.0.3',
    IPPrefixLen: 16,
    IPv6Gateway: '',
    MacAddress: '02:42:ac:11:00:03',
    Networks: { bridge: [Object] }
  }
}
